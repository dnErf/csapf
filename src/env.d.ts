/// <reference path="../.astro/types.d.ts" />

// import * as schema from "@/data/schema.ts"

// export type userSchema = typeof schema.usersTable.$inferInsert & {
//     id: string;
// }

// export type sessionSchema = typeof schema.sessionTable.$inferSelect
// export type userSchema = typeof schema.usersTable.$inferSelect

type Env = {
    devd1: import("@cloudflare/workers-types").D1Database | null;
    dkv1: import("@cloudflare/workers-types").KVNamespace | null;
}
type CfRuntime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
    interface Locals extends CfRuntime {
        // session: sessionSchema | null;
        // user: userSchema | null;
    }
}
