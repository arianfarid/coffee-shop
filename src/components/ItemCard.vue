<template>
  <div class="w-full md:w-80 rounded-lg bg-white border border-gray-200 shadow-md m-1">
    <div class="border-b border-gray-200">
      <div class="flex flex-row relative">
        <!-- coffee name -->
        <div class="font-light p-2 ">{{data.name}}</div>
        <!-- add to cart? -->
        <div class="absolute inset-y-0 right-0 p-2 transform hover:scale-110 cursor-pointer transition duration-200 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:animate-pulse" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <!-- Image -->
    <div class="h-36 bg-gray-100 relative border-b border-gray-200">
      <!-- favorite -->
      <div class="absolute top-0 right-0 z-10 p-1 cursor-pointer  transform hover:scale-110 transition duration-200 ease-in-out" v-on:click="emitToggleFavorite()">
        <!-- add to favorite -->
        <svg v-if="!favorite" class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
        <!-- already favorite -->
        <svg v-if="favorite" class="w-6 h-6" fill="red" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </div>
    </div>
    <!-- Info -->
    <div class="grid grid-cols-8">
      <div class="font-light text-sm text-gray-600 p-2 col-span-6">
        ${{data.price}}
      </div>
      <div class="font-light text-sm text-gray-600 p-2 border-l border-gray-200 col-span-2">
        {{data.calories}} calories
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
    favorite: Boolean
  },
  setup (props, context) {
    const emitToggleFavorite = () => {
      context.emit('toggledFavorite', { id: props.data.id })
    }
    return {
      emitToggleFavorite
    }
  }
}
</script>
