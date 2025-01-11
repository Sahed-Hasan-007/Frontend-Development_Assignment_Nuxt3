<template>
  <div class="p-4 bg-customGreen">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="item in products"
        :key="item.id"
        class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-transform shadow-lg"
      >
        <div class="border-2 mb-4 bg-gray-100 rounded p-2 hover:bg-green-200">
          <NuxtLink :to="`/products/${item.id}`">
            <img
              :src="item.image"
              alt="Product Image"
              class="aspect-[33/35] w-full object-contain rounded"
            />
          </NuxtLink>
        </div>

        <div class="flex gap-2">
          <h5 class="text-base font-bold text-gray-800 hover:text-green-400">
            <NuxtLink :to="`/products/${item.id}`">
              {{ item.title }}
            </NuxtLink>
          </h5>
          <h6 class="text-base text-gray-800 font-bold ml-auto">
            {{ item.price }}$
          </h6>
        </div>

        <div class="flex items-center gap-2 mt-2">
          <button
            type="button"
            @click="addToCart(item)"
            class="text-sm px-2 h-9 font-semibold w-full bg-black hover:bg-[#d4fbc4] text-white hover:text-black tracking-wide ml-auto outline-none border-none rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

function addToCart(item) {
  cartStore.addToCart(item);
}

// Fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
