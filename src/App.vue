<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main>
      <router-view> </router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import NAvbar from '@componentes/NavBar'
import NavBar from './components/NavBar.vue'
  export default {
    components : {NAvbar},
    data: () => ({
    
    }),
  }
</script>