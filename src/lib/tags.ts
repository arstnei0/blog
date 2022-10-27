import type { MDXInstance } from "astro"

const getTags = (posts: MDXInstance<Record<string, any>>[]) => {
	const tags = {} as Record<string, typeof posts>
	posts.forEach((post) => {
		post.frontmatter.tags?.forEach((tag: string) => {
			if (!tags[tag]) tags[tag] = [post]
			else tags[tag].push(post)
		})
	})

	return tags
}

export default getTags
