<template>
  <div class="w-72 bg-white hidden md:flex md:flex-none overflow-y-auto h-screen border-gray-200 border-r border-b rounded-br mr-4">
    <div>
      <div class="side-nav-item-category">
        Drinks
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Hot Coffee'} }">Hot Coffees</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Hot Teas'} }">Hot Teas</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Hot Drinks'} }">Hot Drinks</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Frappés'} }">Frappés</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Cold Coffees'} }">Cold Coffees</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Cold Teas'} }">Cold Teas</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Cold Drinks'} }">Cold Drinks</router-link>
      </div>
      <div class="side-nav-item-category border-t">
        Food
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Toasty Breakfast'} }">Toasty Breakfast</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Lunch'} }">Lunch</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Snacks'} }">Snacks</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Pastries'} }">Pastries</router-link>
      </div>
      <div class="side-nav-item-category border-t">
        For the Home
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Whole Bean'} }">Whole Bean</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Instant'} }">Instant</router-link>
      </div>
      <div class="side-nav-item-category border-t">
        Merch
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Tees'} }">Tees</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Mugs'} }">Mugs</router-link>
      </div>
      <div class="side-nav-item">
        <router-link :to="{'name': 'Category', params: {category: 'Other'} }">Other</router-link>
      </div>
    </div>
  </div>
</template>
<style>
.side-nav-item-category {
  @apply w-72 pl-12 pr-2 text-lg font-semibold mb-2 border-gray-200 border-b;
}
.side-nav-item {
  @apply w-72 pl-16 pr-2 text-base text-gray-700 pt-1 pb-1 hover:bg-gray-50 cursor-pointer;
}

</style>
