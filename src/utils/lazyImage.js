/**
 * Created by wython on 2017/12/1.
 */
import * as position from './position';

/**
 * 节流函数
 * @param fn
 * @param delay
 */
function throttle(fn, delay = 500) {
  let timeoutId = null;
  return () => {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(fn, delay);
  };
}

// 缩略图load事件挂载回调
function miniImageLoad() {

}


const onScroll = throttle(() => {
  console.log(1)
});


/**
 *
 * opt = { glass, miniSrc = (src) => { return '' },   }
 *
 */
export default class LazyImage {
  constructor(target, opt) {
    this.target = position.getEle(target);
    this.images =  Array.prototype.slice.call(this.target.getElementsByTagName('img'));
  }

  start = () => {
    images.forEach((img) => {
      // 预加载缩略图
      let miniImg = window.createElement('img');
      miniImg.style.position = 'absolute';
      miniImg.style.top
    });

    window.addEventListener('scroll', throttle(this.bindScroll.bind(this)));

    Array.prototype.forEach.call(images, (img) => {
      // 启动毛玻璃效果
      this.miniImgSrc && this.opt.glass && this.glassImageLoading(img);
    })
  };

  bindScroll = () => {
    console.log(this)
  };

  clear = () => {
    window.removeEventListener('scroll', this.bindScroll);
  };

  /**
   * 是否进行毛玻璃处理
   * @param img
   */
  glassImageLoading = img => {
    let miniImage = document.createElement('img');
    img.src = this.getMinImgSrc(img.dataset.src);

    miniImage.addEventListener('load', miniImage.bind(this));

    img.addEventListener('load', imageLoad.bind(this));
  }
}
