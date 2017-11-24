<template>
  <header id="header">
    <nav class="header-nav">
      <div class="header-user">
        <Ripple :loading="loading" class="header-ripple">
          <div class="ripple-content">E</div>
        </Ripple>
        <h3 class="icon">wython</h3>
      </div>
      <div class="nav-menu">
        <Search class="blog-search" placeholder="search something...."/>
        <span class="icon mini-search">
        </span>
        <span :class="['icon', 'mini-button', { 'close': showMiniMenu }]" @click="openMiniMenu"></span>
        <ul class="big-menu">
          <li>
            <router-link to="/" class="icon">HOME</router-link>
          </li>
          <li>
            <router-link to="/his" class="icon">HISTORY</router-link>
          </li>
          <li>
            <router-link to="/his" class="icon">TAGS</router-link>
          </li>
          <li>
            <router-link to="/about" class="icon">ABOUT</router-link>
          </li>
        </ul>
        <ul :class="['mini-menu', { 'close': showMiniMenu }]">
          <li>
            <router-link to="/" class="icon">HOME</router-link>
          </li>
          <li>
            <router-link to="/his" class="icon">HISTORY</router-link>
          </li>
          <li>
            <router-link to="/his" class="icon">TAGS</router-link>
          </li>
          <li>
            <router-link to="/about" class="icon">ABOUT</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
  import Ripple from '@/components/ripple';
  import Search from '@/components/search';

  export default {
    name: 'header',
    components: {
      Ripple,
      Search
    },
    data() {
        return {
            loading: false,
            showMiniMenu: true
        }
    },
    beforeMount() {
        //测试loading
        setInterval(() => { this.loading = !this.loading }, 5000)
    },
    methods: {
      openMiniMenu(e) {
          this.showMiniMenu = !this.showMiniMenu;
      }
    }
  }
</script>
<style lang="less">
  @media (max-width: 900px) and (min-width: 668px) {
    #header {
      .blog-search {
        display: none;
      }
      .mini-search:before {
        display: inline-block;
        color: #777;
        font-size: 20px;
        content: "\e986";
        margin-right: 35px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 668px) {
    #header {
      border-bottom: 1px solid #ddd;
      padding: 0 20px 0 10px!important;

      .blog-search {
        display: none;
      }
      .mini-search {
        display: none;
      }
      .header-user {
        justify-content: center;
        width: 100%;
      }
      .nav-menu {
        right: 0;

        .mini-button {
          display: inline-block;
          transform: rotate(90deg);
          transition: all 0.3s ease-in;
        }
        .mini-button:before {
          content: '\e9bd';
          font-size: 30px;
          color: #595959;
        }
        .big-menu {
          display: none;
        }
        .mini-menu {
          transition: right 0.2s ease-out;
          display: block;
          height: 100%;
          padding-top: 10px;
          background: #ffffff;
          border-left: 1px solid #dddddd;
          li {
            width: 100%;
          }
        }
        .mini-menu.close {
          right: -300px;
        }
        .mini-button.close {
          transform: rotate(0);
        }
        ul {
          position: fixed;
          right: 0;
          top: 70px;
          li {
            transition: all 0.2s ease-out;
            display: block;
            padding: 10px 20px;
          }
        }
      }
    }
  }


  @media (min-width: 900px) {

    #header {
      .header-user {
        position: absolute;
        left: 0;
      }
      .mini-search {
        display: none;
      }
    }
  }

  #header {
    padding: 0 80px 0 40px;
    height: 70px;
    margin-bottom: 20px;

    .mini-button {
      display: none;
    }
    .header-ripple {
      background: #ddd;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      .ripple-content{
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        font-size: 12px;
      }
    }
    .header-nav {
      height: 70px;
      position: relative;
      display: flex;
      align-items: center;

      .header-user {
        display: flex;
        align-items: center;
        h3{
          font-size: 23px;
          display: inline;
          margin-left: 10px;
        }
      }
    }
    .mini-menu {
      display: none;
    }
    .nav-menu {
      position: absolute;
      display: flex;
      align-items: center;
      right: 0;
      .router-link-active{
        color: #000;
      }
      .blog-search {
        margin-right: 70px;
      }
      li {
        display: inline-block;
        margin-right: 20px;
        a {
          color: #777;
          text-decoration: none;
        }
        a:hover {
          color: #000;
        }
      }
    }
  }
</style>
