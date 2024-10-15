import { bytesToHex, randomBytes } from '@noble/hashes/utils'
import { defineAction, ActionError } from "astro:actions"
import { z } from "astro:schema"
import jwt from "jsonwebtoken"
import * as db from "@/data/database"

function createSession() {
    let sessionId = bytesToHex(randomBytes(10))
    let currExp = new Date()
    currExp.setHours((new Date()).getHours() + 1)

    return {
        id: sessionId,
        salt: bytesToHex(randomBytes(5)),
        expiresAt: currExp
    }
}

export const authActions = {
    signUp: defineAction({
        accept: "form",
        input: z.object({
            email: z.string(),
            userName: z.string(),
            firstName: z.string(),
            lastName: z.string()
        }),
        handler: async (input, ctx) => {
            let user = await db.getOneUserByEmail(input.email)

            if (user.length) {
                console.log("user already exists")
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "user already exists in record"
                })
            }

            let session = createSession()

            await db.insertNewUser({
                email: input.email, 
                userName: input.userName,
                fullName: input.firstName + " " + input.lastName,
                session: session.id
            })

            await db.insertNewSession(session)

            let jwtToken = jwt.sign(session, import.meta.env.JWT_SECRET, { expiresIn: "1h" })
            ctx.cookies.set(session.id, jwtToken, { path: "/" })
        }
    }),
    signIn: defineAction({
        accept: "form",
        input: z.object({
            userName: z.string()
        }),
        handler: async (input, ctx) => {
            let user = (await db.getOneUserByUser(input.userName))[0]
            if (!user) {
                console.log("user does not exists")
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "user does not exists in record"
                })
            }

            let initNewsession = true
            let sessionToken = ctx.cookies.get(user.session)

            if (sessionToken) {
                jwt.verify(sessionToken.value, import.meta.env.JWT_SECRET, (err, d) => {
                    if (err) {
                        console.log(`jwt is expired ${d}`)
                        ctx.cookies.delete(user.session)
                        db.deleteSessionById(user.session)
                    }

                    initNewsession = false
                })
            }

            if (initNewsession) {
                let session = createSession()

                await db.updateUserSessionById(user.id, session.id)
                await db.insertNewSession(session)

                let jwtToken = jwt.sign(session, import.meta.env.JWT_SECRET, { expiresIn: "1h" })
                ctx.cookies.set(session.id, jwtToken, { path: "/" })
            }
        }
    })
}
