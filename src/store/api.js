import axios from 'axios';

const url = {
  issue: 'https://api.github.com/repos/wython/wython.github.io/issues'
}

export const BlogService = {
  async getBlogs(label, page) {
    return await axios.get(url.issue, {
      params: {
        label,
        page,
        per_page: 10,
        staate: 'open'
      }
    })
  }
}

export default  { BlogService }