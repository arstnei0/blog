import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"

export default defineConfig({
	integrations: [mdx()],
	server: {
		port: 3000,
	},

	vite: {
		plugins: [],
	},

	markdown: {
		shikiConfig: {
		  // Choose from Shiki's built-in themes (or add your own)
		  // https://github.com/shikijs/shiki/blob/main/docs/themes.md
		  theme: 'dracula-soft',
		  // Add custom languages
		  // Note: Shiki has countless langs built-in, including .astro!
		  // https://github.com/shikijs/shiki/blob/main/docs/languages.md
		//   langs: [], 
		  // Enable word wrap to prevent horizontal scrolling
		//   wrap: true,
		},
	  },
})
