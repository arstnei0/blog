import { Component, onMount, createSignal } from "solid-js";
import '$style/backToTop.css'

const BackToTop: Component<{}> = (props) => {
    const [active, setActive] = createSignal(false);
    const [style, setStyle] = createSignal({});
    let progressPath: any

    onMount(() => {
        const pathLength = progressPath.getTotalLength()
        setStyle({
            transition: 'none',
            'stroke-dasharray': 307,
            'stroke-dashoffset': pathLength,
        })

        progressPath.getBoundingClientRect();
        setStyle(s => ({ ...s, transition: 'stroke-dashoffset 10ms linear' }))

        const updateProgress = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            let scrolled = (1 - (winScroll / height))
            if (scrolled < 0) scrolled = 0

            setStyle(s => ({ ...s, 'stroke-dashoffset': scrolled * 307 }))
        }

        updateProgress()

        const offset = 50;

        window.addEventListener('scroll', () => {
            updateProgress()

            if (document.documentElement.scrollTop > offset) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
    })
  
    return <div classList={{ "progress-wrap": true, "hover-target": true, "active-progress": active() }} onClick={(e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

        return false
    }}>
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path ref={progressPath} style={style()} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
}  

export default BackToTop