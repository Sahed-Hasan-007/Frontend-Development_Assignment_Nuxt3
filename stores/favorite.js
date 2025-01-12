import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    favoriteItems: [], // Initialize favorites as an empty array
  }),
  actions: {
    addToFavorite(item) {
      const existingItem = this.favoriteItems.find((fav) => fav.id === item.id);
      if (!existingItem) {
        this.favoriteItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromFavorite(id) {
      this.favoriteItems = this.favoriteItems.filter((fav) => fav.id !== id);
    },
    clearFavorites() {
      this.favoriteItems = [];
    },
  },
});
