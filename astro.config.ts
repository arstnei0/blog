import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { h } from 'hastscript';
import { toString } from 'hast-util-to-string';
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
const AnchorLinkIcon = h('svg', {
  width: 20,
  height: 20,
  version: 1.1,
  viewBox: '0 0 24 24',
  xlmns: 'http://www.w3.org/2000/svg'
}, h('path', {
  fillRule: 'evenodd',
  fill: 'currentcolor',
  d: 'M13 9V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H9c-.55 0-1 .45-1 1s.45 1 1 1h2v8.92c-2.22-.33-4.59-1.68-5.55-3.37l1.14-1.14c.22-.22.19-.57-.05-.75L3.8 12.6a.5.5 0 0 0-.8.4v2c0 3.88 4.92 7 9 7s9-3.12 9-7v-2a.5.5 0 0 0-.8-.4l-2.74 2.05c-.24.18-.27.54-.05.75l1.14 1.14c-.96 1.69-3.33 3.04-5.55 3.37V11h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm-1-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z'
}));

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), svelte()],
  site: "https://zihan.ga",
  server: {
    port: 3000
  },
  vite: {
    plugins: []
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: "dracula-soft"
    },
    rehypePlugins: ['rehype-slug', // This adds links to headings
    ['rehype-autolink-headings', {
      properties: {
        class: 'anchor-link'
      },
      behavior: 'after',
      group: ({
        tagName
      }: {
        tagName: string;
      }) => h(`div.heading-wrapper.level-${tagName}`, {
        tabIndex: -1
      }),
      content: (heading: any) => [h(`span.anchor-icon`, {
        ariaHidden: 'true'
      }, AnchorLinkIcon), toString(heading)]
    }]]
  },
  output: "server",
  adapter: vercel()
});