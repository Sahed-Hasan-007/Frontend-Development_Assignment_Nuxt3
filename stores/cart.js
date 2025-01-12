import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(item) {
      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });``
      }
    },
    
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
    },
    
    // Clear all items from the cart
    clearCart() {
      this.cartItems = [];
    },
  },
});
