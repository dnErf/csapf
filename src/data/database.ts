import type { PostgresJsDatabase } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import * as schema from "@/data/schema.ts"
import { eq } from "drizzle-orm"

const pg: ReturnType<typeof postgres> = postgres(import.meta.env.DATABASE_URL)
const db: PostgresJsDatabase<typeof schema> = drizzle(pg, { schema })

const insertNewUser = async (user: typeof schema.usersTable.$inferInsert) => {
    return db.insert(schema.usersTable).values(user)
}

const insertNewSession = async (session: typeof schema.sessionTable.$inferInsert) => {
    return db.insert(schema.sessionTable).values(session)
}

const getOneUserByEmail = async (email: string) => {
    return db.select().from(schema.usersTable).where(eq(schema.usersTable.email, email))
}

const getOneUserByUser = async (userName: string) => {
    return db.select().from(schema.usersTable).where(eq(schema.usersTable.userName, userName))
}

const updateUserSessionById = async (userId: string, sessionId: string) => {
    return db.update(schema.usersTable)
        .set({ session: sessionId })
        .where(eq(schema.usersTable.id, userId))
}

const deleteSessionById = async (sessionId: string) => {
    return db.delete(schema.usersTable).where(eq(schema.usersTable.session, sessionId))
}

export { 
    insertNewUser, 
    insertNewSession, 
    getOneUserByEmail, 
    getOneUserByUser,
    updateUserSessionById,
    deleteSessionById 
}
