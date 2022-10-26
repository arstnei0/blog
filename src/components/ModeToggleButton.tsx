import { Component, onMount, Show } from "solid-js"
import { mode, Mode, sendMessageToGiscus, setMode, toggle, modeStr } from "$lib/mode"
import "$style/themeToggleButton.css"

const ModeToggleButton: Component<{}> = (props) => {
	onMount(() => {
		const m = mode()
		sendMessageToGiscus(modeStr())
	})

	return (
		<div
			class="all-unset nav-icon hover-target"
			id="theme-toggle-button"
			onClick={() => {
				toggle()
			}}
		>
			<Show
				when={mode() === "light"}
				fallback={
					<Show
						when={mode() === "dark"}
						fallback={
							<svg
								class="nav-icon opacity-effect-reversed"
								width="25"
								height="25"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1h-3zM5 6h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1z"
								/>
							</svg>
						}
					>
						<svg
							class="nav-icon opacity-effect-reversed"
							width="25"
							height="25"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
							/>
						</svg>
					</Show>
				}
			>
				<svg
					class="nav-icon opacity-effect-reversed"
					width="25"
					height="25"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
					/>
				</svg>
			</Show>
		</div>
	)
}

export default ModeToggleButton
