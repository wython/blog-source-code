<template>
  <div class="article-list-wrapper">
    <ArticleItem/>
  </div>
</template>
<script>
  import ArticleItem from './ArticleItem';
  export default {
    name: 'articleList',
    components: {
        ArticleItem
    }
  }
</script>
<style scope lang="less">
  .article-list-wrapper {
    width: 80%;
    margin: auto;
  }
</style>
