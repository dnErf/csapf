import "dotenv/config"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "sqlite",
    driver: "d1-http",
    dbCredentials: {
        accountId: process.env.CL_ID,
        token: process.env.CL_TKN,
        databaseId: process.env.CL_DB
    },
    verbose: true,
    schema: "./src/data/schema.ts",
    out: "./.drizzle"
})
