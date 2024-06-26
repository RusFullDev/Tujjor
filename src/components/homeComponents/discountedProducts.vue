<script setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";
import api from "../../api";

const products = ref([]);
const loading = ref(false);
const offset = ref(0);
const limit = 5;

const fetchProducts = async (initialLoad = false) => {
  loading.value = true;
  try {
    const response = await api.get("/products", {
      params: { limit, skip: products.value.length },
    });
    if (initialLoad) {
      products.value = response.data.products;
    } else {
      products.value = [...products.value, ...response.data.products];
    }
    console.log("products", products.value);
    offset.value += limit; // Increase the offset for the next request
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    loading.value = false;
  }
};

// Initial load
fetchProducts(true);
</script>

<template>
  <div>
    <div class="container">
      <h2 class="text-[#F7931E] font-bold text-[48px]">Товары со скидкой</h2>
      <div
        class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="flex items-center py-5 justify-center">
        <button
          @click="() => fetchProducts(false)"
          class="text-white py-3 px-5 bg-[#F7931E] rounded"
          :disabled="loading"
        >
          Показать еще
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
