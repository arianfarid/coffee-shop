<template>
  <div class="home">
    <!-- a sub menu component for featured drinks, faves, etc -->
    <sub-menu></sub-menu>
    <div class="flex">
      <!-- panel for navigating menu items -->
      <menu-side-nav></menu-side-nav>
      <!-- panel for drinks -->
      {{route.params.category}}
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
// @ is an alias to /src
import SubMenu from '@/components/SubMenu.vue'
import MenuSideNav from '@/components/MenuSideNav.vue'


export default {
  name: 'Category',
  components: {
    MenuSideNav,
    SubMenu
  },
  setup () {
    const route = useRoute()
    return {
      route
    }
  }

}

</script>
