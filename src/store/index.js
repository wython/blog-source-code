/**
 * Created by wython on 2017/11/17.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import blog from './blog';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {

  },

  modules: {
    blog
  },
  strict: debug
})
