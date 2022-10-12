<script>
    import NProgress from 'nprogress'
    import '$util/nprogress.css'
    import { onMount }from 'svelte'
    import '$util/nprogress'

    onMount(() => {
        NProgress.configure({ minimum: 0, showSpinner: false, trickle: false })
        
        window.addEventListener('scroll', (event) => {
            let h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';

            let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
            // console.log(percent)
            if (percent < 1) NProgress.set(percent)
            else NProgress.set(0.999)
        });
    })
</script>

<main>
</main>