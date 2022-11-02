import { Component, For, JSX, createSignal, Show, onMount } from "solid-js"
import "$style/sidebar.css"

const h = (depth: number, content: JSX.Element) => {
	return depth === 1 ? (
		<h1>{content}</h1>
	) : depth === 2 ? (
		<h2>{content}</h2>
	) : depth === 3 ? (
		<h3>{content}</h3>
	) : depth === 4 ? (
		<h4>{content}</h4>
	) : depth === 5 ? (
		<h5>{content}</h5>
	) : (
		<h6>{content}</h6>
	)
}

const Sidebar: Component<{
	headings: { depth: number; slug: string; text: string }[]
}> = (props) => {
	let memo = localStorage.getItem("show-sidebar")
	if (!memo) {
		localStorage.setItem("show-sidebar", "true")
		memo = "true"
	}

	const [showSidebar, setShowSidebar] = createSignal(memo === "true")
	let button1: any, button2: any

	const toggle = () => {
		setShowSidebar((show) => !show)
		if (showSidebar()) {
			localStorage.setItem("show-sidebar", "true")
			;(window as any).cursor.add(button1)
		} else {
			localStorage.setItem("show-sidebar", "false")
			;(window as any).cursor.add(button2)
		}

		;(window as any).cursor.out()
	}

	onMount(() => {
		if (showSidebar()) {
			;(window as any).cursor?.add(button1)
		}
	})

	return (
		<>
			<Show
				when={showSidebar()}
				fallback={
					<svg
						ref={button2}
						class="hover-target desktop-only"
						id="show-sidebar-button"
						onClick={toggle}
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"
						/>
					</svg>
				}
			>
				<aside id="sidebar">
					<svg
						class="hover-target"
						ref={button1}
						id="hide-sidebar"
						onClick={toggle}
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
						/>
					</svg>
					<For each={props.headings}>
						{(heading) => {
							const [text, setText] = createSignal("")
							onMount(() => setText(heading.text))
							const content = (
								<a href={`#${heading.slug}`}>{text()}</a>
							)

							return h(heading.depth, content)
						}}
					</For>
				</aside>
			</Show>
		</>
	)
}

export default Sidebar
