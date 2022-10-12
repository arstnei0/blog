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
    let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

    $: if (import.meta.env.MODE === 'production' && browser && analyticsId) {
        omMount(() => {
            const slug = window.location.pathname.match(/^\/post\/(.*)$/i)[1]
            slug && webVitals({
                path: '/post/[slug]',
                params: {
                    slug,
                },
                analyticsId
            })
        })
    }
</script>