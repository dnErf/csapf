import { relations, sql } from "drizzle-orm"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { nanoid } from "nanoid"

export const xdumps = sqliteTable("xdumps", {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),
    txt: text("txt")
})

export const usersTable = sqliteTable("users", {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),
    email: text("email").notNull(),
    userName: text("user_name").notNull(),
    fullName: text("full_name").notNull(),
    session: text("session").notNull().unique()
})

export const sessionTable = sqliteTable("sessions", {
    id: text("id").notNull(),
    salt: text("salt").notNull(),
    expiresAt: text().default(sql`(CURRENT_TIMESTAMP)`)
})

export const usersToSessionRelations = relations(usersTable, ({ one }) => ({
    session: one(sessionTable)
}))

export const sessionsToUserRelations = relations(sessionTable, ({ one }) => ({
    session: one(usersTable, {
        fields: [sessionTable.id],
        references: [usersTable.session]
    })
}))
