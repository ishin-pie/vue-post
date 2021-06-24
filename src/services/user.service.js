import { axios } from '../core'

const baseUrl = ''

export default {
  async getUserProfile () {
    const response = {}
    try {
      const profile = await axios.get(`${baseUrl}/api/v1/user/profile`)
      const { data } = profile.data
      response.data = data
    } catch (error) {
      response.error = error
    }

    return response
  }
}
