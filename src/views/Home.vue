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
        thumbnail: 'https://assets.website-files.com/5e4b1a54e48aed65701ff226/5e4b1a54e48aed3f261ff24a_photo-1441512673622-3eaa1c39ba28.jpg'
      }
    }
  }
}
</script>
