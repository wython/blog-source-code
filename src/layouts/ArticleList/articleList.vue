<template>
  <div ref="articleList" class="article-list-wrapper">
    <ArticleItem v-for="blog in blogs" :key="blog.id"/>
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
    computed: {
      blogs() {
        console.log('blogs', this.$store.state)
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
      console.log('store', this.$store.state)
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
