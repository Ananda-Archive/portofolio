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

  metaInfo: {
      title: "Ananda Vj's Portofolio",
      titleTemplate: "%s | Ananda Vj's Portofolio",
      meta: [
          {
              vmid:'Home',
              name: "Ananda Vj's Portofolio",
              content: "Ananda Vj's Portofolio"
          }
      ]
  },

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
