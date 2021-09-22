<template>
  <nav-bar></nav-bar>
  <router-view />
  <!-- TODO footer  -->
</template>
<script>
import { provide, ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  setup () {
    // Favorites logic
    const favorites = ref([])
    provide('favorites', favorites)
    const toggleFavorite = (event) => {
      if (!favorites.value.includes(event.id)) {
        favorites.value.push(event.id)
      } else if (favorites.value.includes(event.id)) {
        favorites.value = favorites.value.filter(f => f !== event.id)
      }
    }
    provide('toggleFavorite', toggleFavorite)
    const returnFavorite = (id) => {
      return favorites.value.includes(id)
    }
    provide('returnFavorite', returnFavorite)
    return {}
  }
}

</script>
