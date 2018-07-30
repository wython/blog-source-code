<template>
  <div id="app">
    <div style="min-height: 100%">
      <BlogHeader />
      <div class="app-content">
        <transition name="slide-fade">
          <router-view/>
        </transition>
      </div>
    </div>
    <footer style="width: 100%;display: flex;align-items: center;justify-content: center">
      &copy;2017 - 2017 | <span style="color: #595959;font-size: 12px">纯手工，不添加任何防腐剂</span>
    </footer>
  </div>
</template>

<script>
  import BlogHeader from '@/layouts/header';
  export default {
    name: 'app',
    data() {
      return {
        show: true
      }
    },
    mounted() {

    },
    components: {
      BlogHeader
    }
  }
</script>

<style lang="less">
  #app {
    height: 100%;
  }
  .app-content {
    max-width: 900px;
    margin: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s
  }
  .fade-enter, .fade-leave-to {
    transform: translateY(-50px);
    opacity: 0;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
