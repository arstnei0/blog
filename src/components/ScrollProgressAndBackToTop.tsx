import NProgress from 'nprogress'
import '$lib/nprogress.css'
import { onMount }from 'solid-js'
import '$lib/nprogress'

const ScrollProgressAndBackToTop = () => {
    onMount(() => {
        NProgress.configure({ minimum: 0, showSpinner: false, trickle: false })
        
        window.addEventListener('scroll', (event) => {
            let h = document.documentElement as any, 
                b = document.body as any,
                st = 'scrollTop',
                sh = 'scrollHeight',
                percent: number
            
            percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
            if (percent < 1) NProgress.set(percent)
            else NProgress.set(0.999)
        });
    })

    return <></>
}

export default ScrollProgressAndBackToTop