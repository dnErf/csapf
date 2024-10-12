import { pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid"

export const xdumps = pgTable("xdumps", {
    id: varchar("id").primaryKey().$defaultFn(() => nanoid()),
    txt: varchar("txt")
})

export const luciaUsersTable = pgTable("lucia_users", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email")
})

export const luciaSessionTable = pgTable("lucia_sessions", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => luciaUsersTable.id),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull()
})
