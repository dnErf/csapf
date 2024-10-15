import { defineAction } from "astro:actions"
import { z } from "astro:schema"
import { authActions } from "./auth.ts"

export const server = {
    ...authActions
}
