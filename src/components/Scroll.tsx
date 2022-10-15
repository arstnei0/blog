import NProgress from "nprogress"
import "$lib/nprogress.css"
import { createSignal, onMount } from "solid-js"
import "$lib/nprogress"
import "$style/scroll.css"

const ScrollProgressAndBackToTop = () => {
	const [buttonStyle, setButtonStyle] = createSignal({
		display: "none",
	})

	onMount(() => {
		NProgress.configure({ minimum: 0, showSpinner: false, trickle: false })

		window.addEventListener("scroll", (event) => {
			let h = document.documentElement as any,
				b = document.body as any,
				st = "scrollTop",
				sh = "scrollHeight",
				percent: number

			percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)
			if (percent < 1) NProgress.set(percent)
			else NProgress.set(0.999)

			if (percent > 0.2 && buttonStyle().display === "none") {
				setButtonStyle({ display: "block" })
			} else if (percent < 0.2 && buttonStyle().display === "block") {
				setButtonStyle({ display: "none" })
			}
		})
	})

	return (
		<button
			id="backtotop"
			style={buttonStyle()}
			onClick={() => {
				document.body.scrollTop = 0 // For Safari
				document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
			}}
		>
			<svg color="black" width="32" height="32" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M9.21 11H11v9c0 .55.45 1 1 1s1-.45 1-1v-9h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85zM4 4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1z"
				/>
			</svg>
		</button>
	)
}

export default ScrollProgressAndBackToTop
