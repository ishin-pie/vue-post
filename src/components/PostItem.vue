<template>
  <v-card class="post-item rounded" max-width="690">
    <v-row>
      <v-col cols="12" md="4" class="pa-8 pb-0 pb-md-8 pr-md-0">
        <v-img
          class="rounded"
          max-height="180"
          aspect-ratio="1"
          :src="item.thumbnail"
        ></v-img>
      </v-col>
      <v-col>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>
          <div class="mb-2 text-subtitle-3 grey--text text--darken-1">{{ item.publishDate | uppercase }} | {{ item.author | uppercase }}</div>
          <div class="text-justify grey--text text--darken-2">
            {{ item.description }}
            <span>
              <router-link to="/about">{{ $t('app.read_more') }}</router-link>
            </span>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase()
    }
  }
}
</script>
