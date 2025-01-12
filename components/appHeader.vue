<template>
  <header class="shadow-md font-sans tracking-wide relative z-50">
    <section class="py-2 bg-gray-900 text-white text-right px-4 sm:px-10">
      <p class="text-sm">
        <strong class="mx-2 sm:mx-3">Address:</strong> Kuril, Dhaka
        <strong class="mx-2 sm:mx-3">Contact No:</strong> 01733586288
      </p>
    </section>

    <div
      class="flex flex-wrap items-center justify-between px-4 sm:px-10 py-4 bg-customGreen min-h-[70px]"
    >
      <a href="/" class="flex-shrink-0">
        <img
          src="../public/img/company_logo.png"
          alt="logo"
          class="w-28 bg-customGreen sm:w-36"
        />
      </a>

      <nav class="w-full lg:w-auto mt-4 lg:mt-0">
        <ul
          class="flex flex-col lg:flex-row lg:gap-6 lg:items-center gap-4 items-center"
        >
          <li>
            <NuxtLink
              to="/"
              class="text-[#fcfbfb] bg-gray-900 hover:text-2xl hover:bg-[#d4fbc4] hover:text-black font-bold text-[15px] block px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/products"
              class="text-[#fcfbfb] bg-gray-900 hover:text-2xl hover:bg-[#d4fbc4] hover:text-black font-bold text-[15px] block px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              Products
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/cart"
              class="relative text-[#fcfbfb] bg-gray-900 hover:text-2xl hover:bg-[#d4fbc4] hover:text-black font-bold text-[15px] block px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              Cart
              <span
                v-if="cartCount > 0"
                class="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ cartStore.cartItems.length }}
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/favorites"
              class="relative text-[#fcfbfb] bg-gray-900 hover:text-2xl hover:bg-[#d4fbc4] hover:text-black font-bold text-[15px] block px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              Favorite Products
              <span
                v-if="favoriteCount > 0"
                class="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ favoriteStore.favoriteItems.length }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>

import { ref } from 'vue';
const cartCount = ref(1);
const cartStore = useCartStore(); 

const favoriteCount=ref(1);
const favoriteStore= useFavoriteStore();
</script>
