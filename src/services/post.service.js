import { axios } from '../core'

const baseUrl = ''

export default {
  async getPosts () {
    const response = {}
    try {
      const post = await axios.get(`${baseUrl}/api/v1/posts`)
      const { data } = post.data
      response.data = data
    } catch (error) {
      response.error = error
    }

    return response
  },

  async getFeaturePosts () {
    const response = {}
    try {
      const post = await axios.get(`${baseUrl}/api/v1/posts/feature`)
      const { data } = post.data
      response.data = data
    } catch (error) {
      response.error = error
    }

    return response
  },

  async getPostDetail (id) {
    const response = {}
    try {
      const post = await axios.get(`${baseUrl}/api/v1/posts/${id}`)
      const { data } = post.data
      response.data = data
    } catch (error) {
      response.error = error
    }

    return response
  }
}
