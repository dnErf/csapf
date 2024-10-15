// import { luciaAdapter } from "@/data/database";
// import { Lucia } from "lucia";

// export const lucia = new Lucia(luciaAdapter, {
//     getUserAttributes: (attr) => ({ username: attr.username })
// })

// export interface DatabaseUser {
//     id: string;
//     username: string;
//     passhash: string;
// }

// declare module "lucia" {
//     interface Register {
//         Lucia: typeof lucia;
//         DatabaseUserAttributes: Omit<DatabaseUser, "id">
//     }
// }
