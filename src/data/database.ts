import type { PostgresJsDatabase } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import * as schema from "@/data/schema.ts"

const pg: ReturnType<typeof postgres> = postgres(import.meta.env.DATABASE_URL)
const database: PostgresJsDatabase<typeof schema> = drizzle(pg, { schema })

export { database, pg }
