import type { MDXInstance } from "astro"

export const getPosts = (posts: MDXInstance<Record<string, any>>[]) => {
    return posts
}