import type { Component } from "solid-js";
import { mode, setMode, Mode, modeStr } from "$lib/mode";

const Giscus: Component<{}> = (props) => {
	const { mode: modeName } = ((globalThis as any).zihan as { mode: Mode }) || {}
    setMode(modeName)
    
    return <script 
        src="https://giscus.app/client.js"
        data-repo="zihan-ch/blog"
        data-repo-id="R_kgDOIE6d3Q"
        data-category="General"
        data-category-id="DIC_kwDOIE6d3c4CR5h7"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme={modeStr()}
        data-lang="en"
        crossorigin="anonymous"
        async>
    </script>;
};

export default Giscus