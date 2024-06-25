<template>
  <div class="md:mt-[50px] mt-[30px]">
    <!-- Image display for larger screens -->
    <div
      class="container flex max-md:hidden"
    >
      <div class="flex w-full">
        <div class=" h-full w-[68%] pr-5">
          <swiper
            v-if="showSwiper"
            :modules="[Pagination]"
            :pagination="{ clickable: true }"
            :loop="true"
            class="md:hidden h-full w-full mySwiper "
          >
            <swiper-slide class="h-full" v-for="(item, index) in 3" :key="index">
              <img
                src="/sm-img/header.png"
                alt="main_logo_header"
                class="w-full h-full"
              />
            </swiper-slide>
          </swiper>
        </div>
        <img
          src="/sm-img/sale.png"
          alt="main_logo_header"
          class="w-[31.9%]"
        />
      </div>
    </div>
    <!-- Swiper for smaller screens -->
    <div class="md:hidden">
      <swiper
        v-if="showSwiper"
        :modules="[Pagination]"
        :pagination="{ clickable: true }"
        :loop="true"
        class="md:hidden w-full mySwiper"
      >
        <swiper-slide v-for="(item, index) in 3" :key="index">
          <img
            src="/sm-img/header.png"
            alt=""
            class="swiper-slide mt-[10px] h-full"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Declare reactive variables
const imgs = ref(["/sm-img/header.png", "/sm-img/sale.png"]);

// Control visibility of Swiper to ensure correct rendering
const showSwiper = ref(false);

onMounted(() => {
  showSwiper.value = true;
});
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
