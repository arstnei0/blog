import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel/serverless"
import solidJs from "@astrojs/solid-js"
import compress from "astro-compress"
import rehypePlugins from "./rehypePlugins"

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
		rehypePlugins: rehypePlugins
	},
	// output: "server",
	// adapter: vercel()
})
