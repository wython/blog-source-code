import axios from 'axios';

const origin = 'https://api.github.com/repos/wython/wython.github.io';

const url = {
  issues: origin + '/issues',
  labels: origin + '/labels'
}

async function getRequest(url, params) {
  return await axios.get(url, {
    params: {
      ...params,
      state: 'open',
      client_id: '62590fb1780535d59439'
    }
  })
}

export const BlogService = {
  async getBlogs(label, page) {
    return await getRequest(url.issues, {
      label,
      page
    })
  },
  async getBlog(id) {
    return await getRequest(`${url.issues}/${id}`, {
      state: 'open'
    })
  },
  /**
   * 获取labels标签
   */
  async getLabels() {
    return await getRequest(`${url.labels}`, {})
  }
}

export default  { BlogService }