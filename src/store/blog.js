
import { BlogService } from './api.js'

export default {
  state: {
    value: [],
    currentPage: 1,
    currentBlog: null,
    labels:[]
  },
  actions: {
    async getBlogs ({ commit, state }, payload) {
      const res = await BlogService.getBlogs('blog', payload)

      commit('init', {
        value: res.data,
      })
    },
    async setCurrentBlog({ commit }, payload) {
      const res = await BlogService.getBlog(payload);
      commit('setCurrentBlog', res.data)
    },
    async getLabels({ commit }) {
      const res = await BlogService.getLabels();
      commit('getLabels', res.data)
    },
    async clearBlog({ commit }) {
      commit('clearBlogs');
    }
  },
  mutations: {
    init (state, payload) {
      state.value = payload.value;
      state.currentPage = payload.currentPage
    },
    setCurrentBlog(state, payload) {
      state.currentBlog = payload
    },
    getLabels(state, payload) {
      state.labels = payload;
    },
    clearBlogs(state) {
      state.value = []
    }
  }
}