<template>
  <div id="nav" class="p-4 shadow mb-2">
    <div class="grid-rows-1 flex items-center">
      <div class="
      rounded-full bg-indigo-600 h-12 w-12 flex items-center justify-center mr-6 uppercase font-black text-white">
        Logo
      </div>
      <div>
        <router-link class="uppercase font-bold border-b-4 pb-7 border-indigo-600 tracking-wider hover:text-indigo-600 mr-6" to="/">Menu</router-link>
        <router-link class="uppercase font-bold tracking-wider hover:text-indigo-600 mr-6" to="/giftcards">Gift Cards</router-link>
        <router-link class="uppercase font-bold tracking-wider hover:text-indigo-600 mr-6" to="/about">About</router-link>
      </div>
      <div class="absolute right-0">
        <router-link class="font-semibold hover:text-indigo-600 pr-6" to="/findstore">Find a Store</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {

  }
}

</script>
