<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
  </v-app>
</template>

<script>

import Navbar from '@/components/NavigationBar.vue'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
