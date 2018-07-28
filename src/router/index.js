import Vue from 'vue'
import Router from 'vue-router'

/*-------  page ----------*/
import Home from '@/pages/Home';
import Tags from '@/pages/Tags';
import About from '@/pages/About';
import Archive from '@/pages/Archive';
import Page404 from '@/pages/Page404'
import Article from '@/pages/Article';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '*',
      component: Page404
    },
  ]
})
