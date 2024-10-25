import { bytesToHex, randomBytes } from '@noble/hashes/utils'
import { defineAction, ActionError } from "astro:actions"
import { createJWT, validateJWT } from "oslo/jwt"
import { TimeSpan } from "oslo"
import { z } from "astro:schema"
// import * as db from "@/data/database"
import * as schema from "@/data/schema.ts"
import { drizzle } from 'drizzle-orm/d1'

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
            console.log(ctx.locals.devd1)
            let db = drizzle(ctx.locals.devd1)
            console.log("===")
            console.log(db)

            // let user = await db.getOneUserByEmail(input.email)
            // if (user.length) {
            //     console.log("user already exists")
            //     throw new ActionError({
            //         code: "BAD_REQUEST",
            //         message: "user already exists in record"
            //     })
            // }

            let session = createSession()

            // await db.insertNewUser({
            //     email: input.email, 
            //     userName: input.userName,
            //     fullName: input.firstName + " " + input.lastName,
            //     session: session.id
            // })

            // await db.insertNewSession(session)

            // let jwtToken = await createJWT("HS256", import.meta.env.JWT_SECRET, session, { expiresIn: new TimeSpan(30, "d") })
            // ctx.cookies.set(session.id, jwtToken, { path: "/" })

            Object.assign(ctx.locals, session)
            // Object.assign(ctx.locals, user)
        }
    }),
    signIn: defineAction({
        accept: "form",
        input: z.object({
            userName: z.string()
        }),
        handler: async (input, ctx) => {
            // let user = (await db.getOneUserByUser(input.userName))[0]
            // if (!user) {
            //     console.log("user does not exists")
            //     throw new ActionError({
            //         code: "BAD_REQUEST",
            //         message: "user does not exists in record"
            //     })
            // }

            let initNewsession = true
            // let sessionToken = ctx.cookies.get(user.session)

            // if (sessionToken) {
            //     try {
            //         let jwtVerificationResult = await validateJWT("HS256", import.meta.env.JWT_SECRET, sessionToken.value)
            //         console.log(jwtVerificationResult)
            //     } 
            //     catch {
            //         ctx.cookies.delete(user.session)
            //         initNewsession = false
            //     }
            // }

            if (initNewsession) {
                let session = createSession()

                // await db.updateUserSessionById(user.id, session.id)
                // await db.insertNewSession(session)

                // let jwtToken = await createJWT("HS256", import.meta.env.JWT_SECRET, session, { expiresIn: new TimeSpan(30, "d") })
                // ctx.cookies.set(session.id, jwtToken, { path: "/" })
                
                Object.assign(ctx.locals, session)
                // Object.assign(ctx.locals, user)
            }
        }
    })
}
