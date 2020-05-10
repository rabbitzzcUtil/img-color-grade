<div class="intro" style="text-align:center;">
    <h3>img-color-grade</h3>
    <p>利用 canvas 获取图片颜色，可获取图片主色与次色，并提供生成渐变效果API。</p>
    <p>Obtain the main color and secondary color of the image, and provide the API for generating the gradient effect.</p>
</div>

<h3>Demo</h3>
<hr>

* [Demo](https://img-color.now.sh/)

<h3>Install</h3>
<hr>

<h4>node_modules</h4>

```sh
# yarn
yarn add img-color-grade
#npm
npm install img-color-grade --save
```

<h4>script</h4>

```html
<script src="xxx></script>
```

<h3>Usage</h3>
<hr>

* src image url
* scale image quality(0 ~1)

```js
 const imgs = Array.from(document.querySelectorAll('.img img'))
    
/** ============ 渐变 ===================== */
const famousImgs = imgs.slice(0, 8)
const famousImgSrc = famousImgs.map(img => img.src)

famousImgSrc.forEach((src,index) => {
    const obj = colorGrade(src, 0.3)
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
            // return  some html
        }).join('')
        paletteEls[index] && (paletteEls[index].innerHTML =  html)
    })
})
```

<h3>API</h3>
<hr>
<div class="get-color">
<h4>getColor(imageUrl, count)</h4>
<h5>返回一个 Promise 对象，包括调色板，主色、次色</h5>
<p>从图像获取主色。颜色以三个表示红色，绿色和蓝色值的 RGB(A) 格式的字符串。</p>

<ul>
    <li>imageUrl - 图片url，为 img 标签的 src 属性，或者直接一个远程链接。</li>
    <li>count - 是一个可选参数，必须为1或更大的Integer，默认为10。</li>
</ul>
</div>
<div class="get-color">
<h4>getRenderGradient()</h4>
<h5>返回一段 Promise 对象，resolve 字符串，利用主色拼接成的 rgba 背景色</h5>
<p>从图像获取排序的颜色，将两端的颜色与 background-image 拼接成 CSS 字符串。</p>
</div>


<h3>MIT</h3>
<hr>

[MIT](./LICENSE)
