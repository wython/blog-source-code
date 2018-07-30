<template>
  <div ref="articleList" class="article-list-wrapper">
    <ArticleItem v-for="blog in blogs" :blog="blog" :key="blog.id"/>
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
      new Lazy(this.$refs.articleList, {
        miniSrc: (src) => {
          return src;
        }
      }).start();
    },
    computed: {
      blogs() {
        return this.$store.state.blog.value
      }
    },
    mounted() {
      new Lazy(this.$refs.articleList, {
        miniSrc: (src) => {
          return src;
        }
      }).start();

      this.$store.dispatch('getBlogs', { currentPage: 1 })
    },
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
