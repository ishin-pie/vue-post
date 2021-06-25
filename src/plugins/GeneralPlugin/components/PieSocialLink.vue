<template>
  <a :href="link" target="_blank">
    <v-icon
      v-bind="$attrs"
    >
      {{ icon }}
    </v-icon>
  </a>
</template>

<script>
export default {
  name: 'PieSocialLink',
  props: {
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  padding: 4px;
}
</style>
