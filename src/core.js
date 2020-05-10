import ImgColorGrade from './img-color-grade'

/**
 * 
 * @param {string} imgURL 图片
 * @param {number} scale canvas 比例，数字越小，速度越快，默认为 0.5
 */
export default function (imgURL, scale = 0.5) {
    if (!imgURL || typeof imgURL !== 'string') {
        throw new Error('imgURL must be a url and a string.')
    }
    if (scale > 1 || scale <= 0) {
        throw new Error('scale must be a number between 0 and 1.')
    }
    return new ImgColorGrade(imgURL, scale)
}