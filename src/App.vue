<template>
  <v-app>
    <v-main>
      <app-nav-bar/>
      <div class="vue-post py-4">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from './components/AppNavBar'
export default {
  name: 'App',
  components: {
    AppNavBar
  },
  data: () => ({
    //
  })
}
</script>

<style lang="scss" src="@/styles/app.scss"></style>
