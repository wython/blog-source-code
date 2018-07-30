<template>
  <div ref="articleList" class="article-list-wrapper">
    <ArticleItem/>
    <ArticleItem/>
    <ArticleItem/>
    <ArticleItem/>

    </div>
  </div>
</template>
<script>
  import ArticleItem from './ArticleItem';
  import Lazy from '@/utils/lazyImage/index';
  import Drag from '@/utils/drag';

  export default {
    name: 'articleList',
    components: {
        ArticleItem
    },
    updated() {
      console.log('updated')
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
  .move-div {
    width: 50px;
    height: 50px;
    background: #cccccc;
  }
</style>
