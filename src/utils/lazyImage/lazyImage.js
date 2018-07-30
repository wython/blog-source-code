/**
 * Created by wython on 2017/12/1.
 */
import * as position from '../position';
import './style.less';


const StackBlur = require('./stackBlur');

/**
 * 节流函数
 * @param fn
 * @param delay
 */
function throttle(fn, delay = 50) {
  let timeoutId = null;
  return e => {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => { fn && fn(e) }, delay);
  };
}
/**
 * opt = { glass, miniSrc = (src) => { return '' },   }
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

  bindScroll = e => {
    this.loadImages(e);
  };

  // 判断是否,加载原图
  loadImages = (e) => {
    this.images.forEach(img => {
      let imgRegPos = position.getReTop(img);
      const doc = document.documentElement || document.body;
      const docTop = doc.scrollTop;
      const docClientHeight = doc.clientHeight;

      console.log('--', docTop + (docClientHeight * 2 / 3) - imgRegPos)
      // 判断是否进入视野, 图片进入当前视图的1/3之后开始懒加载
      if((docTop + (docClientHeight * 2 / 3) - imgRegPos) > 0) {
        img.src = img.dataset.src;

        img.onload = () => {
          img.canvas.classList.add('stack-blur-canvas-hidden');
        }
      }
    });
  };

  clear = () => {
    window.removeEventListener('scroll', this.bindScroll);
  };


  getImageWidth = (img, parentNode) => {
    if(img.style.width) {
      if(img.style.width.indexOf('%') + 1) {
        // 百分比
        return (parentNode.style.width || parentNode.clientWidth) * parseInt(img.style.width) / 100;
      } else {
        return img.style.width
      }
    } else {
      return (img.clientWidth || img.dataset.width || 1000)
    }
  }

  insertCanvas = () => {
    this.images = this.images.map(img => {
      // img.classList.add('original-bg');
      // 预加载缩略图
      let miniImg = new Image;
      let parentNode = img.parentNode;
      let canvas = document.createElement('canvas');
      
      const newImage = img.cloneNode(true); // true 完全克隆
      const newDiv = document.createElement('div');
      newDiv.classList.add('lazy-image-wrapper')
      newDiv.appendChild(newImage);
      newDiv.appendChild(canvas);
      
      let canvasWidth  = this.getImageWidth(newImage, parentNode);

      let canvasHeight = newImage.clientHeight || newImage.dataset.height;

      miniImg.onload = () => {
        if(!canvasHeight) {
          canvasHeight = canvasWidth * miniImg.height / miniImg.width;
          // init original image width and height if not
          // 初始化原始图片高宽, 如果没有的话。
          newImage.style.width = canvasWidth + 'px';
          newImage.style.height = canvasHeight + 'px';
          newImage.width = canvasWidth;
          newImage.height = canvasHeight;
        }
        StackBlur.image(miniImg, canvas, 50);

        // 定义canvas位置与img重合
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';

      
        // parentNode.insertBefore(canvas, img);
        // canvas.style.position = 'absolute';
        // canvas.style.top  = img.offsetTop + 'px';
        // canvas.style.left = img.offsetLeft + 'px';
        newImage.canvas = canvas;

        canvas.classList.add('stack-blur-canvas-transition');     
        parentNode.replaceChild(newDiv, img);
        
          
      };
      miniImg.src = this.opt.miniSrc(newImage.dataset.src || newImage.src);
      return newImage;
    });
  };
}
