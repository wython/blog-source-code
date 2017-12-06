/**
 * Created by wython on 2017/12/1.
 */
import * as position from '../position';
import './style.less';


const StackBlur = require('stackblur-canvas');


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

/**
 *
 * opt = { glass, miniSrc = (src) => { return '' },   }
 *
 */
export default class LazyImage {
  constructor(target, opt) {
    this.opt = Object.assign({
      glass: true
    }, opt);
    this.target = position.getEle(target);
    this.images =  Array.prototype.slice.call(this.target.getElementsByTagName('img'));
  }

  start = () => {
    this.opt.miniSrc && this.opt.glass && this.insertCanvas();
    window.addEventListener('scroll', throttle(this.bindScroll.bind(this)));
  };

  bindScroll = () => {
    this.loadImages();
  };

  loadImages = () => {
    this.images.forEach(img => {
      if(position.getReTop(img) < 0) {
        img.src = img.dataset.src;

        img.onload = () => {
          img.canvas.classList.add('stack-blur-canvas-hidden');
          this.images.shift();
        }
      }
    });
  };


  clear = () => {
    window.removeEventListener('scroll', this.bindScroll);
  };

  insertCanvas = () => {
    this.images.forEach((img) => {
      // 预加载缩略图
      let miniImg = new Image;
      let parentNode = img.parentNode;
      let canvas = document.createElement('canvas');

      // 定义canvas位置与img重合
      canvas.style.position = 'absolute';

      canvas.style.top  = img.offsetTop + 'px';
      canvas.style.left = img.offsetLeft + 'px';

      canvas.classList.add('stack-blur-canvas-transition');

      parentNode.insertBefore(canvas, img);
      miniImg.src = this.opt.miniSrc(img.dataset.src || img.src);

      let canvasWidth  = img.clientWidth  || img.dataset.width || 1000;
      let canvasHeight = img.clientHeight || img.dataset.height;

      miniImg.onload = () => {
        if(!canvasHeight)
          canvasHeight = canvasWidth * miniImg.height / miniImg.width;

        StackBlur.image(miniImg, canvas, 25);
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';
        img.canvas = canvas;
      };


    });
  };
}
