<template>
  <span :class="['age-search', { 'age-search-open': open }]">
    <span class="icon search-icon" @click="openSearch"></span>
    <input :placeholder="placeholder" v-model="value" @blur="inputBlur"/>
  </span>
</template>
<script>
  export default {
    name: 'search',
    props: {
      placeholder: String
    },
    data() {
      return {
        clickSearch: false,
        value: ''
      }
    },
    methods: {
      openSearch(e) {
        if (this.value) {
          this.$emit('search', this.value);
        } else {
          this.clickSearch = !this.clickSearch;
        }
      },
      inputBlur(e) {
        this.clickSearch = false;
      }
    },
    computed: {
      open() {
        return this.value || this.clickSearch
      }
    }
  }
</script>
<style scope lang="less">
  @import "./search.less";
</style>
