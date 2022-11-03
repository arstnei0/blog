import {
	Component,
	createEffect,
	createResource,
	createSignal,
	onMount,
	Show,
} from "solid-js"
import "$style/search.css"
import "$style/typography.css"
import g from "@g"

const mock = (search: string) => [
	{
		id: "6fceec9",
		data: async () => ({
			url: "/url-of-the-page/",
			excerpt:
				"A small snippet of the <mark>static</mark> content, with the search term(s) highlighted in mark elements.",
			filters: {
				author: "CloudCannon",
			},
			meta: {
				title: "The title from the first h1 element on the page",
				image: "/weka.png",
			},
			content:
				"The full content of the page, formatted as text. Cursus Ipsum Risus Ullamcorper...",
			word_count: 242,
		}),
	},
]

const Search: Component<{}> = (props) => {
	const [search, setSearch] = createSignal("")
	const [results] = createResource(search, async (search) =>
		import.meta.env.PROD
			? (
					await pagefind.search(search, {
						baseUrl: "/post/",
					})
			  ).results
			: mock(search)
	)

	const [processed] = createResource(
		results,
		async (results) =>
			results &&
			(await Promise.all(
				results.map(async (result: any) => await result.data())
			))
	)

	return (
		<>
			<div id="search-container">
				<h1 id="search-title">
					{g({
						en: "Search in my personal website",
						cn: `在我的个人网站中搜索内容`,
					})}
				</h1>
				<input
					id="search-input"
					class="hover-target"
					placeholder={g({
						en: "Search something...",
						cn: "搜些什么",
					})}
					autofocus
					value={search()}
					onChange={(e) => setSearch((e.target as any).value)}
				></input>
			</div>
			<div id="search-results">
				<Show
					when={results.loading}
					fallback={
						<Show
							when={results() && results().length !== 0}
							fallback={
								<Show
									when={search() !== ""}
									fallback={<h2>Search something...</h2>}
								>
									<h2>
										{g({
											en: "No results found.",
											cn: `啥也没找到。`,
										})}
									</h2>
								</Show>
							}
						>
							{processed() &&
								processed().map((result: any) => (
									<a
										class="search-result hover-target"
										href={result.url}
									>
										<h2>{result.meta?.title}</h2>
										<p innerHTML={result.excerpt}></p>
									</a>
								))}
						</Show>
					}
				>
					<h2>
						{g({
							en: "Loading...",
							cn: "加载中...",
						})}
					</h2>
				</Show>
			</div>
		</>
	)
}

export default Search
