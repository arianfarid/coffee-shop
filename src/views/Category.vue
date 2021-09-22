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
          {{route.params.category}}
        </div>
        <div class="bg-white flex flex-none grid grid-cols-1">
          <div class="font-bold text-xl" v-for="sub_category in drinkCategories" v-bind:key="sub_category.id">
            <div class="py-2">{{sub_category.sub_category}}</div>
            <div class="flex flex-wrap">
              <div class="font-normal text-base" v-for="drink in sub_category.drinks" v-bind:key="drink.id">
                <item-card :data="drink" @toggled-favorite="toggleFavorite($event)" :favorite="returnFavorite(drink.id)"></item-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { inject, ref, watch } from 'vue'
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
    const route = useRoute()
    const drinkData = ref(coffeeData.filter(drink => drink.category === route.params.category))
    const getSubcategories = (currentDrinks) => {
      return currentDrinks.reduce((subcategories, drink, index) => {
        // if subcategory not in array, add it
        if (!subcategories.some(e => e.sub_category === drink.sub_category)) {
          subcategories.push({
            id: subcategories.length + 1,
            sub_category: drink.sub_category,
            drinks: []
          })
        }
        // add drinks to newly structured data
        // find current category of current drink, then push the drink
        subcategories[subcategories.map(e => e.sub_category).indexOf(drink.sub_category)]
          .drinks.push({
            id: drink.id,
            name: drink.name,
            price: drink.price,
            calories: drink.nutrition.calories
          })
        return subcategories
      }, [])
    }
    const drinkCategories = ref(getSubcategories(drinkData.value))

    const toggleFavorite = inject('toggleFavorite')
    const returnFavorite = inject('returnFavorite')

    watch(() => route.params.category, () => {
      drinkData.value = coffeeData.filter(drink => drink.category === route.params.category)
      drinkCategories.value = getSubcategories(drinkData.value)
    })
    return {
      drinkData,
      drinkCategories,
      returnFavorite,
      toggleFavorite,
      route
    }
  }

}

</script>
