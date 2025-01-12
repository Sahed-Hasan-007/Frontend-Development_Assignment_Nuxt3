<template>

  <div class="p-4 font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-customGreen">
  <h1 class="text-2xl font-bold mb-6">Your Cart</h1>
  <div v-if="cartItems.length > 0" class="grid md:grid-cols-3 gap-4">
    <!-- Cart Items -->
    <div class="md:col-span-2 bg-gray-100 p-4 rounded-md">
  <div
    v-for="item in cartItems"
    :key="item.id"
    class="flex justify-between items-center border-b py-4"
  >
    <!-- Image Container -->
    <div class="w-24 h-24 bg-white p-2 rounded-md mb-4">
      <img
        :src="item.image"
        alt="Product Image"
        class="w-full h-full object-contain"
      />
    </div>
    <!-- Item Details -->
    <div class="flex-1 ml-4">
      <!-- Responsive Title -->
      <h3
        class="text-base md:text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
        :title="item.title"
      >
        {{ item.title }}
      </h3>
      <p class="text-sm text-gray-600">
        {{ item.price }}$ x {{ item.quantity }}
      </p>
      <div class="flex gap-4 mt-2">
        <button
          type="button"
          class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs rounded-md"
        >
          -
        </button>
        <span class="mx-2.5">{{ item.quantity }}</span>
        <button
          type="button"
          class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs rounded-md"
        >
          +
        </button>
      </div>
    </div>
    <!-- Remove Button -->
    <button
      @click="removeFromCart(item.id)"
      class="text-sm text-red-600 hover:underline"
    >
      Remove
    </button>
  </div>
</div>


    <!-- Summary Section -->
    <div class="bg-gray-100 rounded-md p-4 md:sticky top-0">

      <ul class="text-gray-800 mt-8 space-y-4">
        <li class="flex justify-between text-base">Discount <span class="font-bold">$0.00</span></li>
        <li class="flex justify-between text-base">Shipping <span class="font-bold">$2.00</span></li>
        <li class="flex justify-between text-base">Tax <span class="font-bold">$4.00</span></li>
        <li class="flex justify-between text-base font-bold">Total <span>{{ total }}$</span></li>
      </ul>

      <div class="mt-8 space-y-2">
        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-black hover:bg-[#d4fbc4] text-white hover:text-black rounded-md">Checkout</button>
      </div>
    </div>
  </div>
  <div v-else class="text-center">
    <p>Your cart is empty.</p>
  </div>
</div>

</template>

<script setup>


import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const cartItems = cartStore.cartItems;

function removeFromCart(id) {
  cartStore.removeFromCart(id);
}

const total = computed(() =>
  Math.round(
    (cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + 6) * 100
  ) / 100
);

</script>
