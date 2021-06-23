import axios from 'axios'
import ms from 'ms'
import MockAdapter from './adapter/MockAdapter'

export function createAxios () {
  const { NODE_ENV } = process.env

  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL || '/',
    timeout: ms('15s'),
    adapter: NODE_ENV === 'production' ? axios.defaults.adapter : MockAdapter(axios.defaults.adapter)
  })

  return instance
}
