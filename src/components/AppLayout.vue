<template>
  <div>
    <app-nav-bar />
    <v-container class="app-layout py-4">
      <v-row class="app-layout-row">
        <v-col cols="12" md="3">
          <user-profile />
        </v-col>
        <v-col cols="12" md="9">
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
