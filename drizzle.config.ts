import "dotenv/config"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL
    },
    verbose: true,
    schema: "./src/data/schema.ts",
    out: "./.drizzle"
})
