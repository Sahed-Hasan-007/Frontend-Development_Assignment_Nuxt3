<template>
  <div class="p-4 bg-customGreen">
    <!-- Grid Container -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <!-- Individual Product Card -->
      <div
        v-for="item in products"
        :key="item.id"
        class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-transform shadow-lg"
      >
        <!-- Image Wrapper -->
        <div class="border-2 mb-4 bg-gray-100 rounded p-2 hover:bg-green-200">
            <NuxtLink
              :to="`/products/${item.id}`"
            >
            <img
            :src="item.image"
            alt="Product Image"
            class="aspect-[33/35] w-full object-contain rounded"
          />
            </NuxtLink>
        </div>

        <div class="flex gap-2">
          <h5 class="text-base font-bold text-gray-800 hover:text-green-400 ">
            <NuxtLink
              :to="`/products/${item.id}`"
            >
              {{ item.title }}
            </NuxtLink>
          </h5>
          <h6 class="text-base text-gray-800 font-bold ml-auto">{{ item.price }}$</h6>
        </div>
        <div class="flex items-center gap-2 mt-2">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Click if you love it">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-black hover:bg-[#d4fbc4] text-white hover:text-black tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
        <!-- Product Title -->
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

//fatch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
