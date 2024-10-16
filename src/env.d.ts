/// <reference path="../.astro/types.d.ts" />

import * as schema from "@/data/schema.ts"

// export type userSchema = typeof schema.usersTable.$inferInsert & {
//     id: string;
// }

export type sessionSchema = typeof schema.sessionTable.$inferSelect
export type userSchema = typeof schema.usersTable.$inferSelect

declare namespace App {
    interface Locals {
        session: sessionSchema | null;
        user: userSchema | null;
    }
}
