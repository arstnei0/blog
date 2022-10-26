import '$style/cursor.css'
import { Component, onMount, createSignal } from 'solid-js';

const Cursor: Component<{}> = (props) => {
    const [style, setStyle] = createSignal({
        
    });

    const [hover, setHover] = createSignal(false);

    onMount(() => {
        document.documentElement.addEventListener('mousemove', (event) => {
            setStyle({
                left: `${event.clientX}px`,
                top: `${event.clientY}px`,
            })
        })

        document.querySelectorAll('a').forEach((el) => {
            el.classList.add('hover-target')
        })

        document.querySelectorAll('button').forEach((el) => {
            el.classList.add('hover-target')
        })

        const mouseOver = () => setHover(true)
        const mouseOut = () => setHover(false)

        document.querySelectorAll(".hover-target").forEach((el) => {
            el.addEventListener('mouseover', mouseOver)
            el.addEventListener('mouseout', mouseOut)
        })
    })
  
    return <>
        <div style={style()} classList={{ cursor: true, hover: hover() }}></div>
        <div style={style()} classList={{ cursor1: true, hover: hover() }}></div>
        <div style={style()} classList={{ cursor2: true, hover: hover() }}></div>
    </>
}

export default Cursor