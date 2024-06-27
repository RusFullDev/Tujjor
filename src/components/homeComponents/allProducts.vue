<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useProducats } from "../../composable/useProducts";

const router = useRouter();

const limit = ref(15);
const skip = ref(0);
const { products, error, loading, fetchProducts } = useProducats(limit, skip);

const loadMore = () => {
  skip.value += limit.value;
  fetchProducts();
};

fetchProducts(); // Initial fetch
</script>

<template>
  <div class="container py-5">
    <div class="grid md:grid-cols-5 grid-cols-2 md:gap-4 gap-3 mt-10">
      <router-link :to="{ name: 'products-details', params: { id: product.id } }"
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
      </router-link>
    </div>
    <!-- Button -->
    <div class="flex items-center justify-center py-4">
      <button
        @click="loadMore"
        class="mt-5 bg-primary hover:bg-orange-300 text-white py-2 px-8 rounded active:bg-white duration-300"
        :disabled="loading"
      >
        Load More
      </button>
    </div>
    <!-- Button -->
  </div>
</template>
