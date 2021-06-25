<template>
  <div class="post-detail" v-if="post">
    <content-block :title="post.title">
      <template v-slot:header>
        <v-img
          max-height="360"
          aspect-ratio="1"
          :src="post.thumbnail"
        />
        <v-card-title class="text-h4 px-8 pt-8">
          {{ post.title }}
        </v-card-title>
        <v-card-text class="ml-4 text-subtitle-5 grey--text text--darken-1">
          {{ post.publishDate | uppercase }} | {{ post.author | uppercase }}
        </v-card-text>
      </template>
      <p class="text-justify">
        {{ post.contents }}
      </p>
      <template v-slot:footer>
        <v-card-actions class="my-8">
          <v-btn
            @click="$router.go(-1)"
          >
            {{ $t('app.post.back') }}
          </v-btn>
      </v-card-actions>
      </template>
    </content-block>
  </div>
</template>

<script>
import PostService from '@/services/post.service'
import ContentBlock from '@/components/ContentBlock'

export default {
  components: {
    ContentBlock
  },
  data () {
    return {
      post: null
    }
  },
  async created () {
    console.log()
    const postId = this.$route.params.postId
    const response = await PostService.getPostDetail(postId)
    if (response.error) {
      console.log(response.error)
    }
    this.post = response.data
  }
}
</script>
