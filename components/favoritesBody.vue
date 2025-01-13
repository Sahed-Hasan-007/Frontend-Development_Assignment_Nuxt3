<template>
    <div class="p-4 bg-customGreen">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold mb-6">Your Favorites</h1>
        <div v-if="favoriteItems.length > 0" class="grid md:grid-cols-2 gap-6">
          <div
            v-for="item in favoriteItems"
            :key="item.id"
            class="bg-white shadow-lg rounded p-4"
          >
            <img
              :src="item.image"
              alt="Product"
              class="w-full h-40 object-contain rounded"
            />
            <h3 class="mt-2 font-semibold text-lg">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.price }}$</p>
            <button
              @click="removeFromFavorite(item.id)"
              class="mt-20 px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-black hover:bg-transparent text-white hover:text-black transition-all duration-300"
            >
              Remove
            </button>
          </div>
        </div>
        <div v-else class="text-center">
          <p>Your favorites list is empty.</p>
        </div>
      </div>
    </div>
  </template>
  

  
  <script setup>
  import { useFavoriteStore } from "../stores/favorite";
  
  const favoriteStore = useFavoriteStore();
  const favoriteItems = favoriteStore.favoriteItems;
  
  // Remove from Favorites
  function removeFromFavorite(id) {
    favoriteStore.removeFromFavorite(id);
  }
  </script>
  