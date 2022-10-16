import { createSignal } from "solid-js"

export function toggleClass(mode: Mode) {
	const classList = document.documentElement.classList
	let has = false
	for (let i in classList) {
		if (classList[i] === "dark") {
			has = true
			document.documentElement.classList.replace("dark", "light")
		} else if (classList[i] === "light") {
			has = true
			document.documentElement.classList.replace("light", "dark")
		}
	}

	if (!has) {
		document.documentElement.classList.add(mode)
	}

	let tried = false

	function sendMessageToGiscus(mode: Mode) {
		const iframe = document.querySelector("iframe.giscus-frame") as any
		if (!iframe) {
			if (!tried) {
				tried = true
				setTimeout(() => sendMessageToGiscus(mode), 1000)
			}
		} else {
			iframe.contentWindow.postMessage(
				{
					giscus: {
						setConfig: {
							theme: mode,
						},
					},
				},
				"https://giscus.app"
			)
		}
	}

	sendMessageToGiscus(mode)
}

export type Mode = "dark" | "light"
export let [mode, setMode] = createSignal("dark" as Mode)
