<template>
  <div class="post">
    <content-block :title="$t('app.post.all_post')" />
    <v-row v-for="item in items" :key="item.id" class="ma-4">
      <post-item :item="item" class="mx-auto" />
    </v-row>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
import PostService from '@/services/post.service'
import ContentBlock from '@/components/ContentBlock'

export default {
  components: {
    ContentBlock,
    PostItem
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    const data = await PostService.getPosts()
    if (data.error) {
      console.log(data.error)
    }
    this.items = data.data
  }
}
</script>
