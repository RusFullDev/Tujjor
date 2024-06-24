<template>
  <div class="md:mt-[50px] mt-[30px]">
    <!-- Image display for larger screens -->
    <div
      class="container flex justify-between items-center gap-5 max-md:hidden"
    >
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
            alt="main_logo_header"
            class="w-full"
          />
        </swiper-slide>
      </swiper>

      <img
        src="/sm-img/sale.png"
        alt="main_logo_header"
        class="w-[31.9%]"
      />
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
            class="swiper-slide mt-[10px]"
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
