<template>
  <div id="nav" class="p-4 shadow z-50 border-gray-200 border-b">
    <div class="flex items-center grid-rows-1">
      <div class="logo">
        Logo
      </div>
      <!-- Larger screens menu -->
      <div class="hidden md:block">
        <router-link class="nav-link-upper border-b-4 pb-7 border-indigo-600 " to="/menu">Menu</router-link>
        <router-link class="nav-link-upper" to="/giftcards">Gift Cards</router-link>
        <router-link class="nav-link-upper" to="/about">About</router-link>
      </div>
      <div class="hidden md:block absolute right-0">
        <router-link class="nav-link" to="/findstore">Find a store</router-link>
        <router-link class="nav-link" to="/findstore">
          <button class="btn-pill btn-light transition ease-in-out btn-animate">Sign in</button>
        </router-link>
        <router-link class="nav-link" to="/findstore">
          <button class="btn-pill btn-dark transition ease-in-out btn-animate">
            Join now</button>
        </router-link>
      </div>
      <!-- Mobile menu -->
      <button type="button" class="inline-flex absolute right-0 items-center p-2 rounded-md justify-center text-indigo-600 rounded-full h-12 w-12 border-indigo-600 hover:text-indigo-600 hover:bg-gray-50 hover:scale-75 transition ease-in-out duration-200 active:text-white active:bg-indigo-600 md:hidden" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <!-- Menu closed icon-->
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- menu open icon -->
        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
// export default {
//   setup() {

//   }
// }

</script>
<style>
.btn-animate {
 @apply duration-200 transform active:scale-95;
}
.btn-dark {
 @apply bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-400 hover:border-indigo-400;
}
.btn-light {
 @apply border-indigo-600 hover:bg-gray-50;
}
.btn-pill {
 @apply border pt-1 pb-1 pl-4 pr-4 rounded-full;
}
.logo {
 @apply rounded-full bg-indigo-600 h-12 w-12 flex items-center justify-center mr-6 uppercase font-black text-white;
}
.nav-link-upper {
 @apply uppercase font-bold tracking-wider hover:text-indigo-600 mr-6 transition ease-in-out duration-200;
}
.nav-link {
 @apply font-semibold hover:text-indigo-600 pr-6;
}
</style>
