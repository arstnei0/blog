import webVitals from "$lib/webVitals"
import { VERCEL_ANALYTICS_ID } from "@env"
import { onMount } from 'solid-js'

// if (import.meta.env.MODE === 'production') {
//     onMount(() => webVitals({
//         page: window.location.pathname,
//         analyticsId: import.meta.env.VERCEL_ANALYTICS_ID,
//         debug: true,
//     }))
// }

let analyticsId = VERCEL_ANALYTICS_ID

if (import.meta.env.MODE === 'production' && analyticsId) {
    onMount(() => {
        const slug = (window || globalThis || global)?.location?.pathname?.match(/^\/post\/(.*)$/i)?.[1]
        slug && webVitals({
            page: location.pathname,
            analyticsId,
            debug: false,
        })
    })
}