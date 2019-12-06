<template>
  <router-link v-if="src" :to="src" class="age-tag icon" :style="tagStyle">
    <slot></slot>
  </router-link>
  <a v-else class="age-tag icon" :style="tagStyle">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'tag',
    props: {
      src: String,
      color: String,
    },
    computed: {
      tagStyle() {
        const color = {
           cursor: this.src ? 'pointer' : 'default',
        };
        if (this.color) {
          color['background-color'] = `#${this.color}`;
          color['border-color'] = `#${this.color}`;
        }
        
        return color
      }
    }
  }
</script>

<style scope lang="less">
  @import "./tag.less";
</style>
