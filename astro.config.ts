import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import { h } from "hastscript"
import { toString } from "hast-util-to-string"
import vercel from "@astrojs/vercel/serverless"
import solidJs from "@astrojs/solid-js"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import compress from "astro-compress"
import { visit } from "unist-util-visit"
import { selectAll } from "hast-util-select"

const AnchorLinkIcon = h(
	"svg",
	{
		width: 18,
		height: 18,
		version: 1.1,
		viewBox: "0 0 16 16",
		xlmns: "http://www.w3.org/2000/svg",
	},
	h("path", {
		fillRule: "evenodd",
		fill: "currentcolor",
		d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",
	})
)

export default defineConfig({
	integrations: [
		mdx({
			extendPlugins: "markdown",
		}),
		sitemap(),
		solidJs(),
		compress({
			css: false,
		}),
	],
	site: "https://zihan.ga",
	server: {
		port: 3000,
	},
	vite: {
		plugins: [],
		define: {
			VERCEL_ANALYTICS_ID: `"${process.env.VERCEL_ANALYTICS_ID}"`,
		},
		build: {
			rollupOptions: {
				external: ["/_pagefind/pagefind.js"],
			},
		},
	},
	markdown: {
		// extendDefaultPlugins: true,
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "dracula-soft",
		},
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						class: "anchor-link",
					},
					behavior: "after",
					group: ({ tagName }: { tagName: string }) =>
						h(`div.heading-wrapper.level-${tagName}`, {
							tabIndex: -1,
						}),
					content: (heading: any) =>
						h(
							`span.anchor-icon`,
							{
								ariaHidden: "true",
							},
							AnchorLinkIcon
						), // toString(heading),
				},
			],
			() => (tree) => {
				tree.children.forEach((child, i) => {
					if (!(child.type === "raw")) return
					if (
						!(
							child.value.includes("pre") &&
							child.value.includes("astro-code") &&
							child.value.includes(
								'style="background-color: #282A36; overflow-x: auto;"'
							)
						)
					)
						return
					;(tree.children[i] as any).value =
						'<div class="code">' + child.value + "</div>"
				})
			},
		],
	},
	// output: "server",
	// adapter: vercel()
})
