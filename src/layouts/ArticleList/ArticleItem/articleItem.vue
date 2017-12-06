<template>
  <article class="article-item">
    <h2>
      如何最好的使用javascript
    </h2>
    <p class="article-mess">
      <span class="date-line">Sep 24, 2017 | <span class="icon eye"></span> 阅读数 1230</span>

    </p>
    <img style="width: 100%" :data-src='require("@/assets/stock-photo-237223627.jpg")'/>
    <p class="article-preview">
      我和大家一样，打算在知乎上找一个有“格调”的jekyll的模板，嗯，
      找到这个帖子知乎——有哪些简洁明快的 Jekyll 模板？。看到了一
      些同学的推荐，cellier这个博客样式。真的漂亮！但没有找到
      cellier同学的博客源码，于是我使用Bootstrap来实现了一把。
      使用Bootstrap没有其它理由，纯是因为我只听过她。好吧，谁叫我
      是个后端程序员呢！
      现在这个主题已经做成一个基于jekyll模板进行开源，这里是地址：github-simplist-jekyll-template，希望各位喜欢...
    </p>
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
  export default {
    components: {
      Tag
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
  }
</style>
