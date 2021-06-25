import { camelCase, upperFirst } from 'lodash'

export default {
  install (Vue) {
    this.installComponents(Vue)
    this.installFilters(Vue)
  },

  installComponents (Vue) {
    const { components } = loadComponents()
    components.forEach(component => Vue.component(component.name, component.module))
  },

  installFilters (Vue) {
    const { filters } = loadFilters()
    filters.forEach(filter => {
      Object.entries(filter).forEach(([key, value]) => Vue.filter(key, value))
    })
  }
}

/**
 * Load Component
 */
function loadComponents () {
  const context = require.context('./components', true, /\.vue$/)
  const components = context.keys().map(fileName => {
    // Get component config
    const componentModule = context(fileName)

    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Gets the file name regardless of folder depth
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )

    return {
      name: componentName,
      module: componentModule.default || componentModule
    }
  })
  return { context, components }
}

/**
 * Load Filter
 */
function loadFilters () {
  const context = require.context('./filters', true, /\.js$/)
  const filters = context.keys().map(fileName => {
    const filterModule = context(fileName)

    return filterModule.default || filterModule
  })

  return { context, filters }
}
