<script setup>
import { useRoute } from "vue-router";
import { UseDetails } from "../composable/useNewProductsDetails.js";
const { backPage, fetchDetails } = UseDetails();

const route = useRoute();
fetchDetails();
backPage();
</script>

<template>
  <div class="container py-52">
    <!-- <Loading v-if="loading" />  -->
    <div class="py-2 flex justify-center gap-10">
      <div>
        <button
          @click="backPage"
          class="text-xl py-3 font-mono font-medium bg-yellow-300 px-7 rounded-md"
        >
          Back
        </button>
      </div>
      <div class="grid grid-cols-2 gap-8 py-10">
        <div
          class="shadow bg-white-[700px] mw-auto mh-auto rounded-md p-6 flex justify-center gap-10"
        >
          <img :src="item.thumbnail" alt="" class="w-full" />
          <div>
            <h1 class="font-semibold text-xl text-center mb-2">
              {{ item.title }}
            </h1>
            <p class="font-norm text-sm mb-2">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
