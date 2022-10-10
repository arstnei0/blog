<script lang="ts">
import { onMount } from 'svelte'
type Mode = 'dark' | 'light'
let mode: Mode = 'light'

function toggleClass(mode: Mode) {
    const classList = document.body.classList
    let has = false
    for (let i in classList) {
        if (classList[i] === 'dark') {
            has = true
            document.body.classList.replace('dark', 'light')
        } else if (classList[i] === 'light') {
            has = true
            document.body.classList.replace('light', 'dark')
        }
    }

    if (!has) {
        document.body.classList.add(mode)
    }
}

// Init theme
if (!localStorage.getItem('mp')) localStorage.setItem('mp', 'light')
if (globalThis.matchMedia && globalThis.matchMedia('(prefers-color-scheme: dark)').matches) {
    mode = 'dark'
} else {
    mode = localStorage.getItem('mp') as Mode
}

onMount(() => {
    toggleClass(mode)
    document.body.classList.remove('nod')
})

function toggle() {
    if (mode === 'light') {
        mode = 'dark'
        localStorage.setItem('mp', mode)
    } else {
        mode = 'light'
        localStorage.setItem('mp', mode)
    }

    toggleClass(mode)
}
</script>

<main>
    <button on:click={toggle} class="ico button">
        {#if mode === 'dark'}
        <svg class="inline" viewBox="0 0 24 24" width="25" height="25" style="vertical-align: sub;"><path fill="currentColor" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"></path></svg>
        {:else}
        <svg class="inline" viewBox="0 0 24 24" width="25" height="25" style="vertical-align: sub;"><path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path></svg>
        {/if}
    </button>
</main>

<style>
    .ico {
        margin-left: 10px;
        margin-top: -3.5px;
        opacity: 0.6;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .ico:hover {
        opacity: 0.9;
    }
</style>