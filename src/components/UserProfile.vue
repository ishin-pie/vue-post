<template>
  <v-card class="user-profile-card mx-auto ma-4" max-width="690">
    <v-container>
      <v-row>
        <v-col>
          <v-img
            class="rounded-circle ma-md-6 ma-16"
            :src="user.photo"
            aspect-ratio="1"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-md-n8 mt-n16">
          <div class="text-subtitle-3 grey--text text--darken-4 mb-4">{{ user.summary }}</div>
        </v-col>
      </v-row>

      <v-divider style="width:120px"></v-divider>

      <v-row no-gutters>
        <v-col cols="12">
          <div class="text-subtitle-1 grey--text text--darken-4 my-3">{{ $t('app.post.feature_post') }}</div>
        </v-col>
        <v-col>
          <router-link v-for="featurePost in featurePosts" :key="featurePost.id"
            :to="{ name: 'PostDetail', params: { postId: featurePost.id }}"
            class="text-decoration-none grey--text link-hover"
          >
            <p>{{ featurePost.title }}</p>
          </router-link>
        </v-col>
      </v-row>

      <v-divider style="width:120px"></v-divider>

      <v-row no-gutters class="ml-n2">
        <pie-social-link
          large
          v-for="(item, key) in user.social"
          :key="key"
          :link="item"
          :icon="`mdi-${key}`"
        />
      </v-row>
      <v-row no-gutters>
        <a class="text-decoration-none font-size-10 grey--text text--darken-1 mt-2"
          href="https://vuejs.org"
          target="_blank"
        >
          {{ $t('app.info.build_with') | uppercase }}
        </a>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserProfile',
  computed: {
    ...mapGetters('User', ['user', 'featurePosts'])
  },
  methods: {
    ...mapActions('User', ['getUser', 'getFeaturePosts'])
  },
  async created () {
    const userData = await this.getUser()
    if (userData.error) {
      console.log(userData.error)
    }

    const postData = await this.getFeaturePosts()
    if (postData.error) {
      console.log(postData.error)
    }
  }
}
</script>
