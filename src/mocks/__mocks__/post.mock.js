import { Model } from 'miragejs'
import faker from 'faker'

const PostSchema = () => {
  return {
    title: faker.lorem.sentence(10),
    author: faker.name.firstName(),
    description: faker.lorem.sentence(30),
    contents: faker.lorem.paragraphs(3),
    thumbnail: faker.image.image(),
    publishDate: faker.date.past().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
}

export default {
  models: {
    post: Model
  },
  seeds (server) {
    [...Array(5)].forEach(() => {
      server.create('post', PostSchema())
    })
  },
  routes (server) {
    server.get('/api/v1/posts', (schema, request) => {
      const collection = schema.posts.all()
      const post = collection.models

      return {
        data: post
      }
    })
  }
}
