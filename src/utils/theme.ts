export type Mode = "dark" | "light"
export let mode: Mode = "light"

export function changeMode(newMode: Mode) {
	mode = newMode
}
