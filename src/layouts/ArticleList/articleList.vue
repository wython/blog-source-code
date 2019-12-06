<template>
  <div ref="articleList" class="article-list-wrapper">
    <ArticleItem v-for="(blog, index) in blogs" :blog="blog" :index="index" :key="blog.id"/>
    <div v-if="!blogs.length" class="loader"></div>
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
