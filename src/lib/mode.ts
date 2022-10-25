import { createSignal } from "solid-js"

export type Mode = "light" | "dark" | "system"

const [mode, setMode] = createSignal<Mode>("system")

const toggle = () => {
	setMode((mode) =>
		mode === "light" ? "dark" : mode === "dark" ? "system" : "light"
	)
	const m = mode()
	if (m === "system") {
		const modeName =
			globalThis.matchMedia &&
			globalThis.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light"

		toggleClass(modeName)
		sendMessageToGiscus(modeName)
	} else {
		toggleClass(m)
		sendMessageToGiscus(m)
	}

	localStorage.setItem("mode", m)
}

const toggleClass = (mode: "light" | "dark") => {
	const classList = document.documentElement.classList

	for (let i in classList) {
		if (classList[i] === "dark") {
			document.documentElement.classList.replace("dark", mode)
		} else if (classList[i] === "light") {
			document.documentElement.classList.replace("light", mode)
		}
	}
}

let tried = 0
const sendMessageToGiscus = (mode: Mode) => {
	const iframe = document.querySelector("iframe.giscus-frame") as any

	if (!iframe || !iframe?.contentWindow) {
		tried++
		setTimeout(() => sendMessageToGiscus(mode), 1000)
	} else {
		iframe?.contentWindow?.postMessage(
			{
				giscus: {
					setConfig: {
						theme: mode,
					},
				},
			},
			"*"
		)
	}
}

export { mode, setMode, toggle, toggleClass, sendMessageToGiscus }
