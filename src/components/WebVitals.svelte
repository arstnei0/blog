<script>
    import webVitals from "$lib/webVitals"

    if (import.meta.env.MODE === 'production') {
        webVitals({
            page: location.pathname,
            analyticsId: import.meta.env.VERCEL_ANALYTICS_ID,
            debug: true,
        })
    }
</script>