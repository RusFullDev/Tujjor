<script setup>
import { ref } from "vue";
import axios from "axios";

const products = ref([]);
const error = ref(null);
const loading = ref(false);
const limit = ref(5);
const skip = ref(0);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}`
    );
    products.value = [...products.value, ...res.data.products];
    skip.value += limit.value;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const loadMore = () => {
  skip.value += limit.value;
  fetchProducts();
};

fetchProducts();
</script>


<template>
  <div class="container py-4">
    <h2 class="text-primary text-[45px] font-semibold">Популярные товары</h2>
    <div class="grid md:grid-cols-5 grid-cols-2 md:gap-4 gap-3 mt-10">
      <div
        class="bg-white p-5 rounded border hover:shadow-lg duration-300"
        v-for="product in products"
        :key="product.id"
      >
        <img
          :src="product.thumbnail"
          alt=""
          class="w-full object-cover rounded mb-3"
        />
        <h1 class="text-[12px] text-[#666666] line-clamp-1 my-2">
          {{ product.title }}
        </h1>
        <p class="line-clamp-2 mb-5 font-semibold text-[14px]">
          {{ product.description }}
        </p>
        <h1 class="text-xl font-semibold text-[#219EBC]">
          ${{ product.price }}
        </h1>
      </div>
    </div>
    <!-- Button -->
    <div class="flex items-center justify-center py-4">
      <button
        @click="loadMore"
        class="mt-5 bg-primary hover:bg-orange-300 text-white py-2 px-8 rounded active:bg-white duration-300"
      >
        Load More
      </button>
    </div>
    <!-- Button -->
  </div>
</template>

<style scoped></style>
