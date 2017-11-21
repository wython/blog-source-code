/**
 * Created by wython on 2017/11/21.
 */

/**
 * 获取元素的背景颜色，先获取行内元素，在获取计算样式
 * @param ele {DomElement|String}
 * @return {String|Boolean}
 */

export function getBg(ele) {
  if(typeof ele === 'string') ele = document.getElementById(ele);

  if(!ele) throw new Error('参数Ele不是合法的DOM元素');

  if(ele.style && ele.style.backgroundColor) return ele.style.backgroundColor;
  let eleStyle = window.getComputedStyle ? window.getComputedStyle(ele) : ele.currentStyle;
  if(!eleStyle) {
    return false
  } else {
    return eleStyle.backgroundColor;
  }
}
