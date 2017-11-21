/**
 * Created by WYTHON on 2017/11/20.
 */

const DRAG_TYPE_LIST = ['x', 'y', 'all'];

let getCss = function(o, key){
  return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
};

module.exports = function Drag(target, opt) {
  opt = Object.assign({
    dragType: 'all'
  }, opt);
  if (!target) throw new Error("Target params must be a document Element or id string");
  if (!DRAG_TYPE_LIST.indexOf(opt.dragType) > -1) throw new Error("DragType option must be one of 'x', 'y' or 'all'");

  this.dragType = opt.dragType;
  this.target = typeof target === 'string' ? document.getElementById(target) : target;
  this.flat = false;
  this.currentTop = opt.top || this.getEleTop();
  this.currentLeft = opt.left || this.getEleLeft();

  this.target.style.position = 'fixed';
  this.setPosition(this.currentTop, this.currentLeft);
  this.init();
  return this;
};

Drag.prototype.init = function () {
  this.target.onmousedown = function (e) {
    this.flat = true;

  };

  this.target.onmousemove = function (e) {
    if(!this.flat) return false;
    let nowX = e.clientX;
    let nowY = e.clientY;
    let disX = nowX - params.currentX;
    let disY = nowY - params.currentY;

    this.setPosition(parseInt(this.currentLeft) + disX, parseInt(this.currentTop) + disY);
  };

  this.target.onmouseup = function (e) {
    this.flat = false;
  }
};

Drag.prototype.setPosition = function(x, y) {
  this.target.style.top = y + 'px';
  this.target.style.left = x + 'px';
};

Drag.prototype.getEleTop = function () {

};

Drag.prototype.getEleLeft = function () {

};
