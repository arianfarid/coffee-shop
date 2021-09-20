<template>
  <div class="home">
    <!-- a sub menu component for featured drinks, faves, etc -->
    <sub-menu></sub-menu>
    <!-- panel for navigating menu items -->
    <!-- panel for drinks -->
    Lets order coffee
  </div>
</template>

<script>
// @ is an alias to /src
import SubMenu from '@/components/SubMenu.vue'

export default {
  name: 'Home',
  components: {
    SubMenu
  }
}
</script>
