import rss from "@astrojs/rss"

export const get = () =>
	rss({
		title: "Zihan’s Blog",
		description: "Zihan Chen’s blog posts.",
		site: import.meta.env.SITE,
		items: import.meta.glob("./post/*.mdx"),
	})
