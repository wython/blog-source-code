<template>
  <article class="article-item">
    <h2>
      {{ blog.title }}
    </h2>
    <p class="article-mess">
      <span class="date-line">{{moment.duration(Date.now() - Date.parse(new Date(blog.created_at))).humanize(true)}} | <span class="icon eye"></span> 阅读数 1230</span>
    </p>
    <div id='marked-view' class="article-marked-box" v-html="mark(blog.body)">
    </div>
    <p>
      <Tag>JavaScript</Tag>
    </p>
    <span class="article-more icon">
      MORE <span class="icon"></span>
    </span>
    <span class="bottom-line clear"></span>
  </article>
</template>
<script>
  import Tag from '@/components/Tag';
  import moment from 'moment';
  import mark from 'marked';
  export default {
    components: {
      Tag
    },
    props: {
      blog: {
        type: Object
      }
    },
    data() {
      return {
        moment,
        mark
      }
    },
    mounted() {

    }
  }
</script>
<style scope lang="less">
  .article-item {
    margin-top: 40px;
    .article-mess {
     display: flex;
      justify-content: center;
      color: rgba(31,31,31,.5);
      font-weight: 100;
      font-size: 14px;
    .date-line {
      text-transform: capitalize;
    }
    .eye:before {
      content: '\e9ce';
    }

  }
  .bottom-line{
    width: 50px;
    /*border-bottom: 1px solid #dddddd;*/
    display: block;
    margin: 20px auto;
  }

  .article-more {
    float: right;
    cursor: pointer;
    .icon:before {
      content: '\ea3c';
    }
  }
  .article-more:hover {
    color: #565454;
  }
  .article-preview {
    margin: 20px auto;
    color: #333;
  }
  h2 {
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    padding: 10px 0 2px;
    margin: 20px;
  }
  .article-marked-box img{
    width: 100%;
  }
  }
</style>
