<script lang="ts">
import { onMount } from 'svelte'
import { Mode, mode as sharedMode, changeMode } from '$util/theme'

let mode = sharedMode

$: changeMode(mode)

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

    function sendMessageToGiscus(mode: Mode) {
        const iframe = document.querySelector('iframe.giscus-frame') as any;
        if (!iframe) return;
        iframe.contentWindow.postMessage({ giscus: {
            setConfig: {
                theme: mode
            }
        } }, 'https://giscus.app');
    }

    sendMessageToGiscus(mode);
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
    <button on:click={toggle} class="ico button" aria-label="Toggle dark or light mode">
        {#if mode === 'dark'}
        <svg width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
        {:else}
        <svg width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"/></svg>
        {/if}
    </button>
</main>

<style>
    .ico {
        margin-left: 10px;
        margin-top: -3.5px;
        opacity: 0.6;
        background: none;
        color: var(--headerColor);
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