import type { APIRoute, MarkdownInstance } from "astro"

export const get: APIRoute = async () => {
    const postsObj = import.meta.glob('./post/*.md')
    const posts = Reflect.ownKeys(postsObj).map((key) => postsObj[key as string])

    return {
        body: JSON.stringify(await Promise.all(
            posts.map(async (mdxImport) => {
                const mdx = await mdxImport() as MarkdownInstance<any>

                return {
                    title: mdx.frontmatter.title,
                    url: mdx.url,
                    body: mdx.rawContent(),
                    tags: mdx.frontmatter.tags || [],
                    pubDate: mdx.frontmatter.pubDate
                }
            }))
        )
    }
}
