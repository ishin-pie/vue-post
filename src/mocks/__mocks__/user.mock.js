import { Model } from 'miragejs'
import faker from 'faker'

const UserSchema = () => {
  return {
    name: 'Ishin',
    summary: faker.lorem.sentence(20),
    photo: 'https://avatars.githubusercontent.com/u/63244532',
    social: {
      facebook: 'https://www.facebook.com/ishin1995',
      github: 'https://github.com/ishin-pie',
      linkedin: 'https://www.linkedin.com/in/ishin-vin/'
    }
  }
}

export default {
  models: {
    user: Model
  },
  seeds (server) {
    server.create('user', UserSchema())
  },
  routes (server) {
    server.get('/api/v1/user/profile', (schema) => {
      const collection = schema.users.where({ name: 'Ishin' })
      const user = collection.models[0].attrs

      return {
        data: user
      }
    })
  }
}
