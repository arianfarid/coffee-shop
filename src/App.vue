<template>
  <nav-bar></nav-bar>
  <router-view />
  <!-- TODO footer  -->
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  setup () {
    return {

    }
  }
}

</script>
