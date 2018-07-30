
import { BlogService } from './api.js'
console.log('----', BlogService.getBlogs)
export default {
  state: {
    value: [],
    currentPage: 1
  },
  actions: {
    async getBlogs ({ commit, state }, payload) {
      const res = await BlogService.getBlogs('blog',  payload.currentPage)

      commit('init', {
        value: res.data,
        currentPage: payload.currentPage
      })
    }
  },
  mutations: {
    init (state, payload) {
      state.value = payload.value;
      state.currentPage = payload.currentPage
    }
  }
}