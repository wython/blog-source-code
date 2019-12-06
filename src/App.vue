<template>
  <div id="app">
    <div id="scroll" style="min-height: 100%">
      <BlogHeader />
      <div class="app-content">
        <transition name="slide-fade">
          <router-view/>
        </transition>
      </div>
    </div>
    <footer style="width: 100%;display: flex;align-items: center;justify-content: center">
      &copy;2017 - 2017 | <span style="color: #595959;font-size: 12px">纯手工，不添加任何防腐剂</span>
    </footer>
  </div>
</template>

<script>
  import BlogHeader from '@/layouts/header';
  export default {
    name: 'app',
    data() {
      return {
        show: true
      }
    },
    beforeMount() {
        const { dispatch } = this.$store;

        dispatch('getLabels');
    },
    components: {
      BlogHeader
    }
  }
</script>

<style lang="less">
  @import './css/code.less';
  #app {
    height: 100%;
  }
  .app-content {
    max-width: 900px;
    margin: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s
  }
  .fade-enter, .fade-leave-to {
    transform: translateY(-50px);
    opacity: 0;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
  }
  #marked-view {
  img {
    max-width: 100%;
  }
  @media screen and (min-width: 1000px) {
      body {
          width: 842px;
          margin: 10px auto;
      }

      
  }
  h1, h2, h3, h4 {
      color: #111111;
      font-weight: 400;
      margin-top: 1em;
  }

  h1, h2, h3, h4, h5 {
    font-family: Georgia, Palatino, serif;
  }
  h1, h2, h3, h4, h5, dl{
      margin-bottom: 16px;
      padding: 0;
  }

  p {
      margin-top: 8px;
      margin-bottom: 3px;
  }
  h1 {
      font-size: 48px;
      line-height: 54px;
  }
  h2 {
      font-size: 36px;
      line-height: 42px;
  }
  h1, h2 {
      border-bottom: 1px solid #EFEAEA;
      padding-bottom: 10px;
  }
  h3 {
      font-size: 24px;
      line-height: 30px;
  }
  h4 {
      font-size: 21px;
      line-height: 26px;
  }
  h5 {
      font-size: 18px;
      line-height: 23px;
  }
  a {
      color: #0099ff;
      margin: 0 2px;
      padding: 0;
      vertical-align: baseline;
      text-decoration: none;
  }
  a:hover {
      text-decoration: none;
      color: #ff6600;
  }
  a:visited {
      /*color: purple;*/
  }
  ul {
    list-style-type: square;
  }
  ul, ol {
      padding: 0;
      padding-left: 18px;
      margin: 0;
      list-style: normal;
  }
  li {
      line-height: 24px;
  }
  p, ul, ol {
      font-size: 16px;
      line-height: 24px;
  }

  ol ol, ul ol {
      list-style-type: lower-roman;
  }

  code, pre {
      font-family: Consolas, Monaco, Andale Mono, monospace;
      background-color:#f7f7f7;
      color: inherit;
  }

  code {
      font-family: Consolas, Monaco, Andale Mono, monospace;
      margin: 0 2px;
  }

  pre {
      font-family: Consolas, Monaco, Andale Mono, monospace;
      line-height: 1.7em;
      word-wrap: break-word;
      word-break: break-all;
      padding: 6px 10px;
      border-left: 5px solid #6CE26C;
  }

  pre > code {
      font-family: Consolas, Monaco, Andale Mono, monospace;
      border: 0;
      display: inline-block;
      width: 100%;
      padding: 0;
      margin: 0;
      overflow: initial;
      line-height: 1.6em;
      font-size: .95em;
      word-wrap: break-word;
      word-break: break-all;
      white-space: pre-wrap;
      background: 0 0;
  }

  code {
      color: #666555;
      padding: 5px 8px;
      box-sizing: border-box;
  }

  aside {
      display: block;
      float: right;
      width: 390px;
  }
  blockquote {
      border-left:.5em solid #eee;
      padding: 0 0 0 2em;
      margin-left:0;
  }
  blockquote  cite {
      font-size:14px;
      line-height:20px;
      color:#bfbfbf;
  }
  blockquote cite:before {
      content: '\2014 \00A0';
  }

  blockquote p {
      color: #666;
  }
  hr {
      text-align: left;
      color: #999;
      height: 2px;
      padding: 0;
      margin: 16px 0;
      background-color: #e7e7e7;
      border: 0 none;
  }

  dl {
      padding: 0;
  }

  dl dt {
      padding: 10px 0;
      margin-top: 16px;
      font-size: 1em;
      font-style: italic;
      font-weight: bold;
  }

  dl dd {
      padding: 0 16px;
      margin-bottom: 16px;
  }

  dd {
      margin-left: 0;
  }

  table {
      *border-collapse: collapse; /* IE7 and lower */
      border-spacing: 0;
      width: 100%;
  }
  table {
      border: solid #ccc 1px;
  }

  table thead {
      background: #f7f7f7;
  }

  table thead tr:hover {
      background: #f7f7f7
  }
  table tr:hover {
      background: #fbf8e9;
      -o-transition: all 0.1s ease-in-out;
      -webkit-transition: all 0.1s ease-in-out;
      -moz-transition: all 0.1s ease-in-out;
      -ms-transition: all 0.1s ease-in-out;
      transition: all 0.1s ease-in-out;
  }
  table td, .table th {
      border-left: 1px solid #ccc;
      border-top: 1px solid #ccc;
      padding: 10px;
      text-align: left;
  }

  table th {
      border-top: none;
      text-shadow: 0 1px 0 rgba(255,255,255,.5);
      padding: 5px;
      border-left: 1px solid #ccc;
  }

  table td:first-child, table th:first-child {
      border-left: none;
  }

  }
</style>
