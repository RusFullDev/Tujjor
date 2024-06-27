<script setup>
import { ref } from "vue";

const selectedCar = ref(0); // Initialize with the default option value
const region = [
  { value: 0, text: "Ваш Город" },
  { value: 1, text: "Uzbekistan" },
  { value: 2, text: "Russia" },
];
const city = [
  { value: 0, text: "Ваш Район" },
  { value: 1, text: "Tashkent" },
  { value: 2, text: "Djizzakh" },
  { value: 3, text: "Samarkand" },
  { value: 4, text: "Bukhara" },
  { value: 5, text: "Andijan" },
  { value: 6, text: "Ferghana" },
  { value: 7, text: "Namangan" },
  { value: 8, text: "Qashkadarya" },
];
</script>

<template>
  <div class="container">
    <!-- Breadcrumb Path -->
    <h2 class="text-sm font-semibold mb-4 mt-10">
      Главная страница / Оформить заказ
    </h2>
    <!-- Breadcrumb Path -->

    <h3 class="text-[46px] font-semibold mb-6 text-primary">Оформить заказ</h3>

    <div class="flex gap-5">
      <form @submit.prevent class="space-y-4 shadow-md w-2/3 py-8 px-10">
        <h3 class="text-[24px] text-primary font-bold">Укажите ваши данные</h3>
        <div class="custom-select flex gap-10">
          <div>
            <p class="py-1 font-semibold">Город</p>
            <select
              v-model="selectedCar"
              class="block w-[350px] border border-gray-300 rounded-lg py-2 px-4 bg-white"
            >
              <option v-for="car in region" :key="car.value" :value="car.value">
                {{ car.text }}
              </option>
            </select>
          </div>
          <div>
            <p class="py-1 font-semibold">Район</p>
            <select
              v-model="selectedCar"
              class="block w-[350px] border border-gray-300 rounded-lg py-2 px-4 bg-white"
            >
              <option
                v-for="car in city"
                :key="car.value"
                :value="car.value"
                class=""
              >
                {{ car.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex gap-10">
          <div>
            <div>
              <p class="py-1 font-semibold">Адрес</p>
              <input
                class="w-[350px] border border-primary rounded-lg py-2 px-4 bg-white"
                type="text"
                required
                placeholder="Введите адрес"
              />
            </div>
          </div>
          <div class="">
            <p class="py-1 font-semibold">Номер</p>
            <input
              class="w-[350px] border border-primary rounded-lg py-2 px-4 bg-white"
              type="text"
              required
              placeholder="Ваш номер"
            />
          </div>
        </div>
      </form>

      <form action="" class="p-6 shadow-md w-full">
        <h3 class="font-semibold text-[22px]">Ваш заказ</h3>
        <div class="flex justify-between pt-3">
          <p>Товары (3)</p>
          <p class="text-primary font-bold">450 000 cум</p>
        </div>
        <div class="flex justify-between pt-1">
          <p>Скидка (3)</p>
          <p class="text-red-600 font-bold">-70 000 cум</p>
        </div>
        <div class="flex justify-between pt-1">
          <p>Доставка (3)</p>
          <p class="text-green-500 font-bold">50 000 cум</p>
        </div>
        <hr class="mt-7">
        <div class="flex justify-between pt-2">
          <p>Общая сумма:</p>
          <p class="text-black font-bold">430 000 cум</p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.custom-select select {
  background-color: #ffffff;
  color: #333333;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #f7931f;
  box-sizing: border-box;
}
</style>
