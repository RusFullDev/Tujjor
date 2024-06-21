<script setup>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const images = ref([
  "/sm-img/bigman.png",
  "/sm-img/bigman.png",
  "/sm-img/bigman.png",
]);
</script>

<template>
  <div class="container">
    <!-- grid Images -->
    <div class="py-6">
      <div class="grid grid-cols-4 gap-4">
        <!-- Katta Rasm Carousel -->
        <div class="max-sm:hidden col-span-2 row-span-2 w-full h-full">
          <Splide
            :options="{
              type: 'loop',
              autoplay: true,
              interval: 2000,
              arrows: false,
              pagination: true,
            }"
          >
            <SplideSlide v-for="(image, index) in images" :key="index">
              <img
                :src="image"
                alt="Big Man"
                class="w-full h-full object-cover"
              />
            </SplideSlide>
          </Splide>
        </div>
        <!-- Katta Rasm Carousel -->

        <!-- Yondagi uzun rasm -->
        <div class="md:col-span-2 col-span-4 w-full h-full">
          <img
            src="/sm-img/Lacoste.png"
            alt="Lacoste"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Yondagi uzun rasm -->

        <!-- Kichkina rasm chap -->
        <div class="md:col-span-1 col-span-2 w-full h-full">
          <img
            src="/sm-img/weddingdress.png"
            alt="Wedding Dress"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Kichkina rasm chap -->

        <!-- Kichkina rasm ong -->
        <div class="md:col-span-1 col-span-2 w-full h-full">
          <img
            src="/sm-img/r-childrens.png"
            alt="Children's"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Kichkina rasm ong -->
      </div>
    </div>

    <!-- grid Images -->
  </div>
</template>

<style scoped></style>
