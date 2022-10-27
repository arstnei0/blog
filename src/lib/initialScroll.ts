export default () => {
    if (!location.hash) return

    const hash = location.hash.match(/^#(.*)$/i)?.[1]
    if (!hash) return

    const el = document.querySelector(`h1[id=${hash}], h2[id=${hash}], h3[id=${hash}], h4[id=${hash}], h5[id=${hash}], h6[id=${hash}]`)
    if (!el) return
    console.log(el)
    
    el.scrollIntoView({
        behavior: 'smooth'
    })
}