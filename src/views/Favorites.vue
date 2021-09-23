<template>
  <div class="home">
    <!-- a sub menu component for featured drinks, faves, etc -->
    <sub-menu></sub-menu>
    <div class="flex">
      <!-- panel for navigating menu items -->
      <menu-side-nav></menu-side-nav>
      <!-- panel for drinks -->
      <div class="grid-cols-1">
        <div class="font-bold text-2xl tracking-wide">
          Favorites
        </div>
        <div class="bg-white flex flex-none grid grid-cols-1">
          <div class="font-normal text-base" v-for="drink in favoritesFiltered" v-bind:key="drink">
            <item-card :data="drink" @toggled-favorite="toggleFavorite($event)" :favorite="returnFavorite(drink.id)"></item-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { useRoute } from 'vue-router'
import { inject } from 'vue'
// @ is an alias to /src
import SubMenu from '@/components/SubMenu.vue'
import MenuSideNav from '@/components/MenuSideNav.vue'
import ItemCard from '@/components/ItemCard.vue'
import coffeeData from '@/assets/coffee_data.json'
export default {
  name: 'Category',
  components: {
    ItemCard,
    MenuSideNav,
    SubMenu
  },
  setup () {
    const favorites = inject('favorites')
    const favoritesFiltered = coffeeData.filter(f => favorites.value.includes(f.id))
    const toggleFavorite = inject('toggleFavorite')
    const returnFavorite = inject('returnFavorite')

    return {
      favorites,
      favoritesFiltered,
      returnFavorite,
      toggleFavorite
    }
  }

}

</script>
