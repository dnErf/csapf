import { pgTable, varchar } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid"

export const xdumps = pgTable("xdumps", {
    id: varchar("id").primaryKey().$defaultFn(() => nanoid()),
    txt: varchar("txt")
})
