export default dom = {
    // 设置样式
    css(el, styles) {
        if (!el) return
        for (let k in styles) {
            if (styles.hasOwnProperty(k)) el.style[k] = styles[k]
        }
    },
    //获取指定样式
    getStyleValue(element, attr) {
        if (!element) return null
        if (element.currentStyle) {
            return element.currentStyle[attr]
        } else {
            return window.getComputedStyle(element, null)[attr]
        }
    },
}