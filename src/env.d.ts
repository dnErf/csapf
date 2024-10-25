/// <reference path="../.astro/types.d.ts" />

// import * as schema from "@/data/schema.ts"

// export type userSchema = typeof schema.usersTable.$inferInsert & {
//     id: string;
// }

// export type sessionSchema = typeof schema.sessionTable.$inferSelect
// export type userSchema = typeof schema.usersTable.$inferSelect

type Env = {
    d1: import("@cloudflare/workers-types").D1Database | null;
}
type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
    interface Locals extends Runtime {
        devd1: import("@cloudflare/workers-types").D1Database | null;
        // session: sessionSchema | null;
        // user: userSchema | null;
    }
}
