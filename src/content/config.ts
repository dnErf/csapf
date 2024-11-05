import { defineCollection, z } from "astro:content"

const traversyCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        published: z.date(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string())
    })
})

export const collections = {
    traversy: traversyCollection
}
