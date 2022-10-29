import dayjs from "dayjs"

export let locale = "en"
export const defaultLocale = "en"

export default {
	en: {
		period: ".",
		'another-site-url': "https://cn.zihan.ga/",
		'still-in-progress': 'Sorry, this page is still in progress.',
		nav: {
			home: "Home",
			about: "About",
			projects: "Projects",
			blog: "Blog",
		},
		blog: {
			myBlogPosts: "My blog posts",
			archive: "Archive",
			noPosts: `Sorry, I haven't written any blog posts yet...`,
		},
		post: {
			date: (date: string) =>
				dayjs(date, "YYYY/MM/DD").format("MMM D, YYYY"),
			month: (date: string) =>
				dayjs(date, "YYYY/MM/DD").format("MMM, YYYY"),
		},
		tag: {
			title: "All posts that have the tag ",
			titleAfter: ":",
		},
	},
	cn: {
		period: "。",
		'another-site-url': "https://zihan.ga/",
		'still-in-progress': '抱歉，这个页面我还在做。',
		nav: {
			home: "主页",
			about: "关于我",
			projects: "项目",
			blog: "博客",
		},
		blog: {
			myBlogPosts: "我的博客文章",
			archive: "存档",
			noPosts: `老子还没写博客捏`,
		},
		post: {
			date: (date: string) =>
				dayjs(date, "YYYY/MM/DD").format("YYYY年MM月D日"),
			month: (date: string) =>
				dayjs(date, "YYYY/MM/DD").format("YYYY年MM月"),
		},
		tag: {
			title: "所有包含标签 ",
			titleAfter: " 的文章：",
		},
	},
} as any
