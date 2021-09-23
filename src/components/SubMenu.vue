<template>
  <div class="bg-gray-50 h-12 z-10 hidden md:flex md:flex-wrap md:content-center pl-20 border-gray-200 border-b">
     <router-link class="sub-menu-item border-b pb-1 border-indigo-600 hover:border-indigo-400 transition ease-in-out duration-200" to="/menu">All Products</router-link>
    <a href="" class="sub-menu-item">Featured</a>
    <a href="" class="sub-menu-item">Previous Orders</a>
    <router-link class="sub-menu-item" to="/favorites">Favorites</router-link>
  </div>
</template>
<style scoped>
.sub-menu-item {
 @apply pl-2 pr-2 text-sm hover:text-gray-600 transition ease-in-out duration-200;
}
</style>
