import { onMount } from "solid-js"
import { Mode, mode, setMode } from "@lib/theme"
import "$style/toggleThemeButton.css"

function toggleClass(mode: Mode) {
	const classList = document.body.classList
	let has = false
	for (let i in classList) {
		if (classList[i] === "dark") {
			has = true
			document.body.classList.replace("dark", "light")
		} else if (classList[i] === "light") {
			has = true
			document.body.classList.replace("light", "dark")
		}
	}

	if (!has) {
		document.body.classList.add(mode)
	}

	function sendMessageToGiscus(mode: Mode) {
		const iframe = document.querySelector("iframe.giscus-frame") as any
		if (!iframe) return
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

	sendMessageToGiscus(mode)
}

// Init theme
if (!localStorage.getItem("mp")) localStorage.setItem("mp", "light")
if (
	globalThis.matchMedia &&
	globalThis.matchMedia("(prefers-color-scheme: dark)").matches
) {
	setMode("dark")
} else {
	setMode(localStorage.getItem("mp") as Mode)
}

onMount(() => {
	toggleClass(mode())
	document.body.classList.remove("nod")
})

function toggle() {
	setMode((mode) => {
		if (mode === "light") {
			localStorage.setItem("mp", "dark")
			return "dark"
		}

		localStorage.setItem("mp", "light")
		return "light"
	})

	toggleClass(mode())
}

const ThemeToggleButton = () => {
	return <>
		<div class="toggleWrapper">
			<input type="checkbox" class="dn" id="dn" onChange={() => toggle()} checked={mode() === 'dark'}></input>
			<label for="dn" class="toggle">
				<span class="toggle__handler">
					<span class="crater crater--1"></span>
					<span class="crater crater--2"></span>
					<span class="crater crater--3"></span>
				</span>
				<span class="star star--1"></span>
				<span class="star star--2"></span>
				<span class="star star--3"></span>
				<span class="star star--4"></span>
				<span class="star star--5"></span>
				<span class="star star--6"></span>
			</label>
		</div>
    </>
}

export default ThemeToggleButton
