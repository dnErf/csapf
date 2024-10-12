import type { PostgresJsDatabase } from "drizzle-orm/postgres-js"
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import * as schema from "@/data/schema.ts"

const pg: ReturnType<typeof postgres> = postgres(import.meta.env.DATABASE_URL)
const database: PostgresJsDatabase<typeof schema> = drizzle(pg, { schema })
const lucid = new DrizzlePostgreSQLAdapter(database, schema.luciaSessionTable, schema.luciaUsersTable)

export { pg, database, lucid }
