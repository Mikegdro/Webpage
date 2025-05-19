import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'page',
            source: '*.md',
        }),
        blog: defineCollection({
            source: 'blog-post/*.md',
            type: 'page',
        })
    }
})