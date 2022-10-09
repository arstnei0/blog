import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

export default defineConfig({
	integrations: [mdx()],
	server:{
		port: 3000
	},

	vite: {
		plugins: [
			
		]
	}
});