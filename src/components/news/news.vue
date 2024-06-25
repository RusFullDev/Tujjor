<script setup>
import { ref } from "vue";
import VideoNovosti from "./VideoNovosti.vue";

const news = ref([
  {
    img: "/news.png",
    title: "В AliExpress представили портрет типичного покупателя в регионах",
    description:
      "Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом. ",
    date: "2014-01-05",
  },
  {
    img: "/news.png",
    title: "В AliExpress представили портрет типичного покупателя в регионах",
    description:
      "Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом. ",
    date: "2014-01-05",
  },
  {
    img: "/news.png",
    title: "В AliExpress представили портрет типичного покупателя в регионах",
    description:
      "Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом. ",
    date: "2014-01-05",
  },
]);
</script>

<template>
  <div class="py-9">
    <div class="container">
      <div class="flex gap-3">
        <p>Главная страница</p>
        <p>/</p>
        <p>Новости</p>
      </div>
      <h2 class="text-5xl text-[#F7931F] font-medium py-3">Новости</h2>
      <div class="md:flex justify-between gap-5">
        <div
          v-for="(item, index) in news"
          :key="index"
          class="border shadow-xl"
        >
          <img :src="item.img" alt="" />
          <div class="px-3">
            <h3 class="text-2xl font-medium py-3">
              {{ item.title }}
            </h3>
            <p class="text-[#666666]">{{ item.description }}</p>
            <div class="flex justify-between py-4">
              <button class="px-4 py-2 bg-[#F7931F] text-white rounded">
                Подробно
              </button>
              <p class="text-blue-400">{{ item.date }}</p>
              ok
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VideoNovosti />
</template>

<style scoped></style>
ok