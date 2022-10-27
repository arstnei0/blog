// await Astro.glob('./post/*.mdx')

import type { MDXInstance } from "astro"
import dayjs from "dayjs"

export function getPosts(posts: MDXInstance<Record<string, any>>[]) {
	if (import.meta.env.PROD)
		return posts.filter((post) => !post.frontmatter.draft)
	else return posts
}

export function getSortedPosts(result: MDXInstance<Record<string, any>>[]) {
	const posts = getPosts(result)

	return posts.sort((a: any, b: any) =>
		dayjs(a.frontmatter.pubDate).isBefore(dayjs(b.frontmatter.pubDate))
			? 1
			: -1
	)
}

export function getGroupedPosts(result: MDXInstance<Record<string, any>>[]) {
	const posts = getSortedPosts(result)
	const grouped: Record<string, MDXInstance<Record<string, any>>[]> = {}

	posts.forEach((post) => {
		const date = dayjs(post.frontmatter.pubDate).format("MMMM, YYYY")
		grouped[date] = grouped[date] ? [...grouped[date], post] : [post]
	})

	// return [grouped, posts]
	return grouped
}
