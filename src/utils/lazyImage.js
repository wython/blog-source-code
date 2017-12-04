/**
 * Created by wython on 2017/12/1.
 */
import {getEle} from './position';

//缩略图load事件挂载回调
function miniImageLoad() {

}

//原image load事件挂载回调
function imageLoad() {

}

class LazyImage {
  constructor(target, opt) {
    this.target = getEle(target);

  }

  start = () => {
    let images = this.target.getElementsByTagName('img');

    Array.prototype.forEach.call(images, (img, i) => {
      //启动毛玻璃效果
      this.miniImgSrc && this.opt.glass && this.glassImageLoading(img);
      this.bindScroll(img);
    })
  };

  bindScroll = img => {

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
