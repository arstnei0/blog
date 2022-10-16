import { onMount } from "solid-js"
import { Mode, mode, setMode, toggleClass } from "@lib/theme"
import "$style/toggleThemeButton.css"

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
	setMode(localStorage.getItem('mp') as Mode)

	return (
		<>
			<div class="toggleWrapper">
				<input
					type="checkbox"
					class="dn"
					id="dn"
					onChange={() => toggle()}
					checked={mode() === "dark"}
					aria-label="toggle theme"
				></input>
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
	)
}

export default ThemeToggleButton
