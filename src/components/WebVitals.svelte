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
    console.log(analyticsId)

    $: if (import.meta.env.MODE === 'production' && analyticsId) {
        onMount(() => {
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