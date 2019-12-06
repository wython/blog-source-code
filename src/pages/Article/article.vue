<template>
  <div v-if="!blog.title" class="loader"></div>
  <div v-else class='article-page'>
    <h2>{{blog.title}}</h2>
    <p class="article-mess">
      <span class="date-line">{{moment.duration(Date.now() - Date.parse(new Date(blog.created_at))).humanize(true)}} | <span class="icon eye"></span> 评论数 {{blog.comments}}</span>
    </p>
    <div id="marked-view" v-html="marked(blog.body)">
    </div>
  </div>
</template>
<script>
  import marked from 'marked';
  import moment from 'moment';
  export default {
    data() {
      return {
        marked,
        moment
      }
    },
    beforeMount() {
      const number = this.$route.params.id;
      this.$store.dispatch('setCurrentBlog', number);
    },
    computed: {
      blog() {
        return this.$store.state.blog.currentBlog || { title: '', body: ''};
      }
    }
  }
</script>

<style scope lang="less">
  .article-page {
    h2 {
      font-weight: 500;
      font-size: 30px;
      text-align: center;
      padding: 10px 0 2px;
      margin: 20px;
    }
    .article-mess {
      display: flex;
      justify-content: center;
      color: rgba(31,31,31,.5);
      font-weight: 100;
      font-size: 14px;
      .date-line {
        text-transform: capitalize;
      }
    }
  }
</style>
