import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	integrations: [mdx()],

	vite: {
		plugins: [
			AutoImport({
				include: [
					/\.[tj]sx?$/,
					/\.astro$/,
				]
			}),
		]
	}
});