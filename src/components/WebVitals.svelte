<script>
    import webVitals from "$lib/webVitals"
    import { onMount } from 'svelte'

    // if (import.meta.env.MODE === 'production') {
    //     onMount(() => webVitals({
    //         page: window.location.pathname,
    //         analyticsId: import.meta.env.VERCEL_ANALYTICS_ID,
    //         debug: true,
    //     }))
    // }
    let analyticsId = VERCEL_ANALYTICS_ID;

    $: if (import.meta.env.MODE === 'production' && analyticsId) {
        onMount(() => {
            const slug = window.location.pathname.match(/^\/post\/(.*)$/i)[1]
            slug && webVitals({
                page: location.pathname,
                analyticsId
            })
        })
    }
</script>