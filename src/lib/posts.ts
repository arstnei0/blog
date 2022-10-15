// Astro.glob('./post/*')

import dayjs from 'dayjs'

export async function getAllPosts(result: any) {
    return result;
}

export async function getSortedPosts(result: any) {
    const posts = await getAllPosts(result)
    if (posts) {
        return posts.sort((a: any, b: any) => (dayjs(a.frontmatter.pubDate).isBefore(dayjs(b.frontmatter.pubDate)) ? 1 : -1))
    }
}

export async function getGroupedPosts(result: any) {
    const posts = await getSortedPosts(result)
    const grouped: Record<string, any> = {}

    posts?.forEach((post: any) => {
        const date = dayjs(post.frontmatter.pubDate).format('MMMM, YYYY')
        grouped[date] = grouped[date] ? [...grouped[date], post] : [post]
    })

    return [grouped, posts]
}