<template>
  <v-row>
    <post-item :item="item" class="mx-auto" />
  </v-row>
</template>

<script>
import PostItem from '@/components/PostItem'

export default {
  name: 'Home',

  components: {
    PostItem
  },
  data () {
    return {
      item: {
        id: 1,
        title: 'Wherever far wow thus a squirrel raccoon jeez jaguar this from along',
        publishDate: 'June 25, 2020',
        author: 'Art',
        description: 'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind',
        thumbnail: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
      }
    }
  }
}
</script>
