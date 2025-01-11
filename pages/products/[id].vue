<template>
  <div class="font-[sans-serif] p-4 bg-customGreen">
    <div class="lg:max-w-6xl max-w-xl mx-auto">
      <div
        class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8"
      >
        <div class="w-full lg:sticky top-0">
          <div class="flex flex-col gap-4">
            <div class="bg-white shadow p-2">
              <img
                :src="product.image"
                alt="Product"
                class="w-full h-auto aspect-[11/8] object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div class="w-full">
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800">
              <p>{{ product?.title }}</p>
            </h3>
            <div class="flex items-center gap-3 mt-1">
              <div class="flex items-center gap-1">
                <p class="text-base text-gray-500">4</p>
                <svg
                  class="w-4 h-4 fill-black"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 fill-black"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 fill-black"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 fill-black"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
              </div>
              
            </div>
            <div class="mt-2">
              <p class="text-gray-500 text-left mt-1 text-sm">
                {{ product?.description }}
              </p>
            </div>

            <div class="flex items-center flex-wrap gap-2 mt-4">
              <h4 class="text-black text-2xl sm:text-3xl font-bold">
                {{ product?.price }}$
              </h4>
            </div>

            <div>
              <h4 class="text-base mt-4 text-gray-500 font-semibold">
                Net Wt: 100G
              </h4>
            </div>
          </div>

          <hr class="my-6 border-gray-300" />

          <div>
            <div class="mt-4 flex flex-wrap gap-4">
              <button
                type="button"
                class="px-4 py-3 w-[45%] border border-yellow-300 bg-black text-white hover:bg-[#d4fbc4] hover:text-black text-sm font-semibold"
              >
                Add to cart
              </button>
              <button
                type="button"
                class="px-4 py-3 w-[45%] border border-yellow-600 bg-black hover:bg-[#d4fbc4] text-white hover:text-black text-sm font-semibold"
              >
                Add to favorite
              </button>
            </div>
          </div>

          <hr class="my-6 border-gray-300" />

          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

//fatching the product
const { data: product } = await useFetch(uri);
</script>

<style scoped>
div {
  text-align: center;
}
.cc {
  color: yellow;
}
</style>
