<template>
  <div ref="ripple" :class="rippleCls">
    <div :style="circleStyle" :class='"c-1"'>

    </div>
    <div :style="circleStyle" :class='"c-2"'>

    </div>
    <div :style="circleStyle" :class='"c-3"'>

    </div>
  </div>
</template>

<script>
  import {prefixCls} from '../customer';
  import './ripple.less';
  import {getBg} from '../utils';

  const ripplePrefixCls = `${prefixCls}-ripple`;

  export default {
    name: 'ripple',
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        width: 100,
        height: 100,
        bgColor: '#2789e9',
        wrapperBg: ''
      }
    },
    computed: {
      //波纹动态样式
      circleStyle() {
        return {
          backgroundColor: this.bgColor,
          width: this.width + 'px',
          height: this.height + 'px'
        }
      },

      //波纹外层类
      rippleCls() {
        return  [{
          [`${ripplePrefixCls}-animated`]: this.loading
          }, `${ripplePrefixCls}-wrapper`
        ]
      }
    },
    mounted() {
      let wrapperEle = this.$refs['ripple'];

      //获得wrapper元素背景颜色
      this.bgColor = getBg(wrapperEle);
      this.wrapperBg = 'transparent';

      wrapperEle.setAttribute('style',  `background-color:${this.wrapperBg};${wrapperEle.getAttribute('style')} || ''`)
      //获得wrapper元素的width，height
      this.width = wrapperEle.clientWidth;
      this.height = wrapperEle.clientHeight;
    }
  }
</script>
<style scope lang="less">
  @import "./ripple.less";
</style>
