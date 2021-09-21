<template>
  <div class="home">
    <!-- a sub menu component for featured drinks, faves, etc -->
    <sub-menu></sub-menu>
    <div class="flex">
      <!-- panel for navigating menu items -->
      <menu-side-nav></menu-side-nav>
      <!-- panel for drinks -->
      <div class="grid-cols-1">
        <div class="font-bold text-lg tracking-wide">
          {{route.params.category}}
        </div>
        <div class="bg-white flex flex-none grid grid-cols-1">
          <div class="font-bold text-base" v-for="sub_category in drinkCategories" v-bind:key="sub_category.id">
            {{sub_category.sub_category}}
            <div class="font-normal text-base" v-for="drink in sub_category.drinks" v-bind:key="drink.id">
              {{drink.name}}
            </div>
          </div>
        </div>
        <!--         <div v-for="drink in drinkData" v-bind:key="drink.id">
          <div>{{ drink.name }}</div>
        </div> -->
      </div>
      <br>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
// @ is an alias to /src
import SubMenu from '@/components/SubMenu.vue'
import MenuSideNav from '@/components/MenuSideNav.vue'
import coffeeData from '@/assets/coffee_data.json'
export default {
  name: 'Category',
  components: {
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
          .drinks.push(
            {
              id: drink.id,
              name: drink.name
            }
          )
        return subcategories
      }, [])
    }
    const drinkCategories = ref(getSubcategories(drinkData.value))
    watch(() => route.params.category, () => {
      drinkData.value = coffeeData.filter(drink => drink.category === route.params.category)
      drinkCategories.value = getSubcategories(drinkData.value)
    })
    return {
      drinkData,
      drinkCategories,
      route
    }
  }

}

</script>
