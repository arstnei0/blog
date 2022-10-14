import type { AstroGlobal } from 'astro';
import dayjs from 'dayjs'

export async function getAllPosts(Astro: AstroGlobal) {
    return await Astro.glob('./post/*');
}

export async function getSortedPosts(Astro: AstroGlobal) {
    const posts = await getAllPosts(Astro)
    if (posts) {
        return posts.sort((a: any, b: any) => (dayjs(a.frontmatter.pubDate).isBefore(dayjs(b.frontmatter.pubDate)) ? 1 : -1))
    }
}

export async function getGroupedPosts(Astro: AstroGlobal) {
    const posts = await getSortedPosts(Astro)
    const grouped: Record<string, any> = {}

    posts?.forEach((post) => {
        const date = dayjs(post.frontmatter.pubDate).format('MMMM, YYYY')
        grouped[date] = grouped[date] ? [...grouped[date], post] : [post]
    })

    return [grouped, posts]
}