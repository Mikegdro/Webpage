import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'page',
            source: '*.md',
            schema: z.object({
                title: z.string(),
                description: z.string()
            })
        }),
        blog: defineCollection({
            source: 'blog-post/*.md',
            type: 'page',
            schema: z.object({
                tags: z.array(z.string()),
                image: z.string(),
                author: z.string(),
                date: z.string()
            })
        }),
        hobbies: defineCollection({
            source: 'hobbies/*.md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                image: z.string()
            })
        }),
        work: defineCollection({
            source: 'work/*.md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                from: z.string(),
                to: z.string(),
                image: z.string()
            })
        })
    }
})