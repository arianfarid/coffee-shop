<template>
  <div class="home">
    <!-- a sub menu component for featured drinks, faves, etc -->
    <sub-menu></sub-menu>
    <div class="flex">
      <!-- panel for navigating menu items -->
      <menu-side-nav></menu-side-nav>
      <!-- panel for drinks -->
      <div class="font-bold text-lg tracking-wide">
        {{route.params.category}}
      </div>
      <div class="w-96 bg-white flex flex-none pl-20 grid grid-cols-1">
        <div v-for="sub_category in drink_subcategories">
          {{sub_category}}
        </div>
<!--         <div v-for="drink in coffee_data" v-bind:key="drink.id">
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
    const coffee_data = ref(coffeeData.filter(drink => drink.category === route.params.category));

    const getSubcategories = (current_drinks) => {
      return current_drinks.reduce((subcategories, drink) => {
        //if subcateogry not in array, add it
        if (!subcategories.includes(drink.sub_category)) {
          subcategories.push(drink.sub_category)
        }
        return subcategories
      },[])
    }
    const drink_subcategories = ref(getSubcategories(coffee_data.value))
    watch(() => route.params.category, () => {
      coffee_data.value = coffeeData.filter(drink => drink.category === route.params.category)
      drink_subcategories.value = getSubcategories(coffee_data.value)
      console.log(drink_subcategories)
    });
    return {
      coffee_data,
      drink_subcategories,
      route
    }
  }

}

</script>
