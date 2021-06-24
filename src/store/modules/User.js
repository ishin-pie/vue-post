import UserService from '@/services/user.service'
import PostService from '@/services/post.service'

const types = {
  GET_USER: 'GET_USER',
  GET_FEATURE_POST: 'GET_FEATURE_POST'
}

function initialState () {
  return {
    user: {},
    featurePosts: []
  }
}

const state = initialState()

const getters = {
  user (state) {
    return state.user
  },

  featurePosts (state) {
    return state.featurePosts
  }
}

const mutations = {
  [types.GET_USER] (state, payload) {
    state.user = payload
  },

  [types.GET_FEATURE_POST] (state, payload) {
    state.featurePosts = payload
  }
}

const actions = {
  async getUser ({ commit }) {
    const response = await UserService.getUserProfile()
    if (response.data) {
      commit(types.GET_USER, response.data)
    }
    return response
  },

  async getFeaturePosts ({ commit }) {
    const response = await PostService.getFeaturePosts()
    if (response.data) {
      commit(types.GET_FEATURE_POST, response.data)
    }
    return response
  }
}

export default {
  namespaced: true,
  types,
  state,
  getters,
  mutations,
  actions
}
