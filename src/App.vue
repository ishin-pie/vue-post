<template>
  <v-app>
    <v-main>
      <app-layout>
        <router-view />
      </app-layout>
    </v-main>
  </v-app>
</template>

<script>
import AppLayout from './components/AppLayout'

export default {
  name: 'App',
  components: {
    AppLayout
  },
  data: () => ({
    //
  })
}
</script>

<style lang="scss" src="@/styles/app.scss"></style>
