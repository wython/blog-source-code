<template>
  <div class="home">
    <ArticleList/>
  </div>
</template>

<script>
  import ArticleList from '@/layouts/ArticleList'

  export default {
    name: 'Home',
    components: {
      ArticleList
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      handleLoading(e) {
        this.loading = !this.loading
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
