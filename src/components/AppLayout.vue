<template>
  <div>
    <app-nav-bar />
    <v-container class="vue-post py-4">
      <v-row>
        <v-col cols="12" md="3">
          <user-profile />
        </v-col>
        <v-col>
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppNavBar from './AppNavBar'
import UserProfile from './UserProfile.vue'

export default {
  name: 'AppLayout',
  components: {
    AppNavBar,
    UserProfile
  }
}
</script>

<style>
</style>
