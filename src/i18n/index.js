import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /\.js$/)
  const messages = {}
  locales.keys().forEach(key => {
    const payload = locales(key).default
    const pattern = /\.\/(\w.+)\/(\w.+)\.js$/

    const { 1: locale, 2: path } = pattern.exec(key)

    messages[locale] = messages[locale] || {}
    messages[locale][path] = messages[locale][path] || {}
    messages[locale][path] = payload
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
