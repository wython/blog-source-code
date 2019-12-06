import Vue from 'vue'
import Router from 'vue-router'

/*-------  page ----------*/
import Home from '@/pages/Home';
import Tags from '@/pages/Tags';
import About from '@/pages/About';
import Archive from '@/pages/Archive';
import Page404 from '@/pages/Page404'
import pArticle from '@/pages/Article';
import ArticleList from '@/layouts/ArticleList';
import store from '@/store';
Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/archive',
    //   name: 'Archive',
    //   component: Archive
    // },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags,
      children: [
        {
          path: ':label',
          name: 'Label',
          component: ArticleList,
          beforeEnter: (to, from, next) => {
            // ...
            console.log(to)
            store.dispatch('clearBlog');
            store.dispatch('getBlogs', {
              label: to.params.label
            })
            next()
          },
          beforeRouteLeave: () => {
            store.dispatch('clearBlogs');
            next()
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/article/:id',
      name: 'article',
      component: pArticle
    },
    {
      path: '*',
      component: Page404
    },
  ]
})
