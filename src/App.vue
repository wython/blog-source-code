<template>
  <div id="app">
    <div class="drag-container" ref="dragContainer">
      <div ref="testDrag" class="test-drag"></div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  import Drag from './utils/drag';


  export default {
    name: 'app',
    data() {
      return {}
    },
    mounted() {
      new Drag(this.$refs.testDrag, {
          dragType: 'all',
          fixed: true,
          top: 300,
        })
        .on('beforeMove', function (e) {
          console.log('before move')
        })
        .on('moving', function (e) {
          console.log('moving')
        })
        .on('moved', function (e) {
          console.log('moved')
        })
        .addContainer(this.$refs.dragContainer)
        .start()
    }
  }
</script>

<style lang="less">
  .test-drag {
    background: #ccc;
    width: 100px;
    height: 100px;
  }
  .drag-container{
    position: fixed;
    top: 200px;
    left: 200px;
    height: 200px;
    background: cornflowerblue;
  }

  #app {
    height: 100%;
  }
</style>
