import { createSignal } from "solid-js"

export type Mode = "dark" | "light"
export let [mode, setMode] = createSignal("dark" as Mode)
