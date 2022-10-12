<script>
    import webVitals from "$lib/webVitals"
    import { onMount } from 'svelte'

    if (import.meta.env.MODE === 'production') {
        onMount(() => webVitals({
            page: window.location.pathname,
            analyticsId: import.meta.env.VERCEL_ANALYTICS_ID,
            debug: true,
        }))
    }
</script>