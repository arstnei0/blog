import type { Component } from "solid-js";
import { mode, setMode, Mode, modeStr } from "$lib/mode";

const Giscus: Component<{}> = (props) => {
	const { mode: modeName } = ((globalThis as any).zihan as { mode: Mode }) || {}
    setMode(modeName)

    if (globalThis.document) {
        const giscus = document.querySelector('#giscus')
        const script = document.createElement('script')
        script.setAttribute('src', 'https://giscus.app/client.js')
        script.setAttribute('data-repo', 'zihan-ch/blog')
        script.setAttribute('data-repo-id', 'R_kgDOIE6d3Q')
        script.setAttribute('data-category', 'General')
        script.setAttribute('data-category-id', "DIC_kwDOIE6d3c4CR5h7")
        script.setAttribute('data-mapping', 'pathname')
        script.setAttribute('data-strict', '0')
        script.setAttribute('data-reactions-enabled', '1')
        script.setAttribute('data-emit-metadata', '0')
        script.setAttribute('data-input-position', 'top')
        script.setAttribute('data-theme', modeStr())
        script.setAttribute('data-lang', 'en')
        script.setAttribute('data-crossorigin', 'anonymous')
        script.setAttribute('async', 'true')

        giscus?.appendChild(script)
    }
    
    return <></>
};

export default Giscus