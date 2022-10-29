import { Component, createEffect, createResource, createSignal, onMount, Show } from "solid-js"
import '$style/search.css'
import '$style/typography.css'

const mock = (search: string) => ([
	{
		id: '6fceec9',
		data: async () => (
			{
				"url": "/url-of-the-page/",
				"excerpt": "A small snippet of the <mark>static</mark> content, with the search term(s) highlighted in mark elements.",
				"filters": {
				  "author": "CloudCannon"
				},
				"meta": {
				  "title": "The title from the first h1 element on the page",
				  "image": "/weka.png"
				},
				"content": "The full content of the page, formatted as text. Cursus Ipsum Risus Ullamcorper...",
				"word_count": 242
			  }
		)
	},
])

const Search: Component<{}> = (props) => {
	const [search, setSearch] = createSignal('')
	const [results] = createResource(search, async (search) => (
			import.meta.env.PROD ? (
					await pagefind.search(search, {
						baseUrl: '/post/'
					})
				).results : (
				mock(search)
			)
		))

	const [processed] = createResource(results, async (results) => (
		results && await Promise.all(results.map(async (result: any) => await result.data()))
	))

	return <>
		<div id="search-container">
			<h1 id="search-title">Search in my personal website</h1>
			<input id="search-input hover-target" placeholder="Search something..." autofocus value={search()} onInput={(e) => setSearch((e.target as any).value)}></input>
		</div>
		<div id="search-results">
			<Show when={results.loading} fallback={
				<Show 
					when={results() && results().length !== 0} 
					fallback={
						<Show when={search() !== ''} fallback={<h2>Search something...</h2>}>
							<h2>No results found.</h2>
						</Show>
					}
				>
					{
						processed() && processed().map((result: any) => (
							<a class="search-result hover-target" href={result.url}>
								<h2>{result.meta?.title}</h2>
								<p innerHTML={result.excerpt}></p>
							</a>
						))
					}
				</Show>
			}>
				<h2>Loading...</h2>
			</Show>
		</div>
	</>
}

export default Search
