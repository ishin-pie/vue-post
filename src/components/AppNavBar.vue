<template>
  <div class="app-nav-bar">
    <v-app-bar>
      <router-link to="/" exact>
        <v-app-bar-title>{{ $t('app.title') }}</v-app-bar-title>
      </router-link>

      <v-spacer></v-spacer>

      <router-link class="app-menu px-2" v-for="item in items" :to="item.link" :key="item.text" exact>
        <span>{{ item.text }}</span>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppNavBar',
  data () {
    return {
      items: [{
        text: this.$t('app.menu.home'),
        link: '/'
      }, {
        text: this.$t('app.menu.about'),
        link: '/about'
      }, {
        text: this.$t('app.menu.contact'),
        link: '/contact'
      }]
    }
  }
}
</script>
