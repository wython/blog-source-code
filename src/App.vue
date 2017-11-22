<template>
  <div id="app">
    <div class="drag-container" ref="dragContainer">
      <div ref="testDrag" class="test-drag"></div>
    </div>
    <p>
      sdfsdfs
      sdfsdf
      sdfsdfsd
      sdfsdf
      sdfsdf
      sdfsdf
      sdfsf
    </p>
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
          fixed: false
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
    height: 200px;
    background: cornflowerblue;
  }

  #app {
    height: 100%;
  }
</style>
