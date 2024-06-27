<script setup>
import { defineProps } from "vue";

// Define the props
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <div class="flex flex-col shadow-lg p-2">
    <img
      :src="product.thumbnail"
      alt="Product Thumbnail"
      class="w-full h-48 object-cover"
    />
    <p class="text-gray-500">{{ product.category }}</p>
    <p class="text-lg font-bold">{{ product.title }}</p>
    <div class="flex flex-col py-5">
      <p class="text-[#F7931E] line-through">{{ product.price }} SUM</p>
      <p class="text-blue-500 font-semibold">
        {{ product.discountPercentage }} SUM
      </p>
    </div>
  </div>
</template>

<style scoped></style>
