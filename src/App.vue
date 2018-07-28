<template>
  <div id="app">
    <BlogHeader />
    <router-view/>
  </div>
</template>

<script>
  import Drag from './utils/drag';
  import BlogHeader from '@/layouts/header';

  export default {
    name: 'app',
    data() {
      return {}
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
</style>
