<template>
  <div>
    <v-row v-for="item in items" :key="item.id" class="ma-4">
      <post-item :item="item" class="mx-auto" />
    </v-row>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
import { axios } from '../core'

export default {
  name: 'Home',
  components: {
    PostItem
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    const { data } = await axios.get('/api/v1/posts')
    this.items = data.data
  }
}
</script>
