<template>
  <a class="age-tag icon" :style="tagStyle">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'tag',
    props: {
      src: String
    },
    computed: {
      tagStyle() {
        return {
          cursor: this.src ? 'point' : 'default'
      }
      }
    }
  }
</script>

<style scope lang="less">
  @import "./tag.less";
</style>
