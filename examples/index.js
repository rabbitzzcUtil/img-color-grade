import colorGrade from '../src/core.js'
// import dom from './dom.js'
window.onload = function () {
    const imgs = Array.from(document.querySelectorAll('.img img'))

    /** ============ 渐变 ===================== */
    const famousImgs = imgs.slice(0, 8)
    const famousImgSrc = famousImgs.map(img => img.src)

    famousImgSrc.forEach((src,index) => {
        const obj = colorGrade(src)
        obj.getRenderGradient().then(rgba => {
            famousImgs[index].parentNode.setAttribute('style', rgba)
        })
    })

    /** =========== 调色板 ====================== */
    const paletteImgs = imgs.slice(8, 16)
    const paletteImgSrc = paletteImgs.map(img => img.src)

    
    const paletteEls = Array.from(document.querySelectorAll('.example-palette .img .palette'))
    paletteImgSrc.forEach((src,index) => {
        const obj = colorGrade(src)
        obj.getColor(5).then(color => {
            const html = color.palette.map(o => {
                return `<div style='background:${o.color};border-radius:50%;width:20px;height:20px;margin:5px;'></div>`
            }).join('')
            paletteEls[index] && (paletteEls[index].innerHTML =  html)
        })
    })
}