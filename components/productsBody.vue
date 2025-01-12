<template>
  <div class="p-4 bg-customGreen">
    <div v-if="isLoading" class="flex justify-center items-center min-h-[50vh]">
      <p>Loading products...</p>
    </div>
    <div
      v-else-if="error"
      class="flex justify-center items-center min-h-[50vh] text-red-500"
    >
      <p>{{ error }}</p>
    </div>
    <div
      v-else
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
            id="addToCart"
            type="button"
            @click="handleAddToCart(item)"
            class="text-sm px-2 h-9 font-semibold w-full bg-black hover:bg-[#d4fbc4] text-white hover:text-black tracking-wide ml-auto outline-none border-none rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- Popup Message -->
    <div
      v-if="popupVisible"
      class="fixed top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-4 rounded shadow-lg transition-opacity duration-300"
    >
      Product added to cart!
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
import { useProducts } from "../composables/useProducts";

const cartStore = useCartStore();
const { products, isLoading, error } = useProducts();
const popupVisible = ref(false);

function handleAddToCart(item) {
  cartStore.addToCart(item);
  showPopup();
}

function showPopup() {
  popupVisible.value = true;
  setTimeout(() => {
    popupVisible.value = false;
  }, 2000);
}
</script>
