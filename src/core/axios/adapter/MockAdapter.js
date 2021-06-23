import { MockService } from '@/mocks'

export default function MockAdapter (adapter) {
  return async function (config) {
    const isDevelopment = process.env.NODE_ENV === 'development'
    const isMimicEnabled = process.env.VUE_APP_MIMIC_ENABLE === 'true'

    if (isDevelopment && isMimicEnabled) {
      await MockService.install()
    }

    return adapter(config)
  }
}
