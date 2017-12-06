<template>
  <div ref="articleList" class="article-list-wrapper">
    <ArticleItem/>
    <ArticleItem/>
  </div>
</template>
<script>
  import ArticleItem from './ArticleItem';
  import Lazy from '@/utils/lazyImage/index';

  export default {
    name: 'articleList',
    components: {
        ArticleItem
    },
    mounted() {
      new Lazy(this.$refs.articleList, {
        miniSrc: (src) => {
          return src;
        }
      }).start();
    }
  }
</script>
<style scope lang="less">
  .article-list-wrapper {
    width: 80%;
    margin: auto;
  }
</style>
