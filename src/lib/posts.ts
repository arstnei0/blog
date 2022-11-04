// await Astro.glob('./post/*.md')

import t from "@t"
import type { MarkdownInstance } from "astro"
import dayjs from "dayjs"

export const getPosts = (posts: MarkdownInstance<Record<string, any>>[]) =>
	import.meta.env.PROD
		? posts.filter((post) => !post.frontmatter.draft)
		: posts

export function getSortedPosts(
	result: MarkdownInstance<Record<string, any>>[]
) {
	const posts = getPosts(result)
	console.log(posts.filter((post) => !post.frontmatter.draft))

	return posts.sort((a: any, b: any) =>
		dayjs(a.frontmatter.pubDate).isBefore(dayjs(b.frontmatter.pubDate))
			? 1
			: -1
	)
}

export function getGroupedPosts(
	result: MarkdownInstance<Record<string, any>>[]
) {
	const posts = getSortedPosts(result)
	const grouped: Record<string, MarkdownInstance<Record<string, any>>[]> = {}

	posts.forEach((post) => {
		const date = t("post.month")(post.frontmatter.pubDate)
		grouped[date] = grouped[date] ? [...grouped[date], post] : [post]
	})

	// return [grouped, posts]
	return grouped
}
