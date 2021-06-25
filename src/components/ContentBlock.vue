<template>
  <v-card class="ma-4 mx-auto mx-md-4 rounded" max-width="690">
    <slot name="header">
      <v-card-title class="text-h4 px-8 pt-8">
        {{ title }}
      </v-card-title>
    </slot>
    <v-container class="px-8">
      <slot></slot>
    </v-container>
    <v-container class="px-8">
      <slot name="footer"></slot>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'ContentBlock',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
