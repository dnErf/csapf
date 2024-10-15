import { pgTable, varchar, text, timestamp, unique } from "drizzle-orm/pg-core"
import { nanoid } from "nanoid"

export const xdumps = pgTable("xdumps", {
    id: varchar("id").primaryKey().$defaultFn(() => nanoid()),
    txt: varchar("txt")
})

export const usersTable = pgTable("users", {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),
    email: text("email").notNull(),
    userName: text("user_name").notNull(),
    fullName: text("full_name").notNull(),
    session: text("session").notNull().unique()
}, (t) => (
    {
        unq1: unique().on(t.id, t.session),
        unq2: unique().on(t.id, t.email, t.userName)
    }
))

export const sessionTable = pgTable("sessions", {
    id: text("id")
        .primaryKey()
        .references(() => usersTable.session),
    salt: text("salt").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull()
})
