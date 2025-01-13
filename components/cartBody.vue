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
              class="text-base md:text-lg font-semibold text-gray-900 line-clamp-2 break-words"
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
                class="flex items-center px-2.5 py-1.5 border border-gray-300 bg-black text-white hover:bg-transparent hover:text-black text-xs rounded-md"
                @click="decreaseQuantity(item.id)"
              >
                -
              </button>
              <span class="mx-2.5">{{ item.quantity }}</span>
              <button
                type="button"
                class="flex items-center px-2.5 py-1.5 border border-gray-300 bg-black text-white text-xs hover:bg-transparent hover:text-black  rounded-md"
                @click="increaseQuantity(item.id)"
              >
                +
              </button>
            </div>
          </div>
          <!-- Remove Button -->
          <button
            @click="removeFromCart(item.id)"
            class="mt-20 px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-black hover:bg-transparent text-white hover:text-black transition-all duration-300"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="bg-gray-100 rounded-md p-4 md:sticky top-0">
        <ul class="text-gray-800 mt-8 space-y-4">
          <li class="flex justify-between text-base">
            Discount <span class="font-bold">$0.00</span>
          </li>
          <li class="flex justify-between text-base">
            Shipping <span class="font-bold">$2.00</span>
          </li>
          <li class="flex justify-between text-base">
            Tax <span class="font-bold">$4.00</span>
          </li>
          <li class="flex justify-between text-base font-bold">
            Total <span>{{ total }}$</span>
          </li>
        </ul>

        <div class="mt-8 space-y-2">
          <button
            type="button"
            class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-black hover:bg-[#d4fbc4] text-white hover:text-black rounded-md"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const cartItems = cartStore.cartItems;

const total = ref(0);

// Function to calculate total based on cartItems
function calculateTotal() {
  return Math.round(
    (cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + 6) * 100
  ) / 100;
}

// Watch the cartItems array to update the total dynamically
watch(
  () => cartItems,
  (newCartItems) => {
    total.value = calculateTotal();
  },
  { deep: true } // Watch deeply to detect changes in item quantities
);

// Initialize the total when the component is mounted
onMounted(() => {
  total.value = calculateTotal();
});

function removeFromCart(id) {
  cartStore.removeFromCart(id);
}

function increaseQuantity(id) {
  const item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity += 1;
    cartStore.saveToLocalStorage();
  }
}

function decreaseQuantity(id) {
  const item = cartItems.find((item) => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    cartStore.saveToLocalStorage();
  } else if (item && item.quantity === 1) {
    removeFromCart(id);
  }
}
</script>

<style scoped>
/* Line clamp for truncating titles */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Show up to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.break-words {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
