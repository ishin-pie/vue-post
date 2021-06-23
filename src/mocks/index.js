import { createServer } from 'miragejs'

/** Mock Model Reducer */
const modelReducer = (acc, cur) => ({ ...acc, ...('models' in cur ? cur.models : {}) })

const { mocks } = loadMocks()

/**
 * MirageJS API Mocking
 * @see https://miragejs.com/ — For documentations
 */
export const MockService = {
  installed: false,
  async install () {
    if (this.installed) return
    this.installed = true

    const server = createServer({
      models: mocks.reduce(modelReducer, {}),
      seeds (server) {
        mocks.forEach(mock => {
          if (mock.seeds) {
            mock.seeds(server)
          }
        })
      },
      routes () {
        this.passthrough('/__open-in-editor')

        mocks.forEach(mock => {
          if (mock.routes) {
            mock.routes(this)
          }
        })
      }
    })

    return server
  }
}

/**
 * Dynamically load all mocks
 * @returns {LoadedModules}
 */
function loadMocks () {
  const context = require.context('./__mocks__', true, /\.mock\.js(?:on)?$/)

  const mocks = context
    .keys()
    .map((key) => {
      return /\.js$/.test(key)
        ? context(key).default
        : context(key)
    })

  return { mocks, context }
}
