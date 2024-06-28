<script setup></script>

<template>
  <div class="container py-5">
    <!-- Title -->
    <h2 class="text-orange-500 text-3xl font-bold mb-6 mt-9">Ваши магазины</h2>

    <!-- Shops Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
        <div class="flex items-center justify-between mb-4">
          <img src="/sm-img/radiusLogo.png" alt="Radius Logo" class="w-20" />
          <div class="text-primary">★ 4.5</div>
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2 w-full">
          <img
            src="/sm-img/radiusPhone.png"
            alt="Product 1"
            class="w-full object-cover sm:w-[180px] h-[210px]"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/sm-img/radiusTv.png"
              alt="Product 2"
              class="w-full object-cover sm:w-[160px] h-[100px]"
            />
            <img
              src="/sm-img/radiusRef.png"
              alt="Product 3"
              class="w-full object-cover sm:w-[160px] h-[100px]"
            />
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4 w-full sm:w-auto cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <img src="/sm-img/texnomartLogo.png" alt="Radius Logo" class="w-20" />
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src="/sm-img/TexnoWash.png"
            alt="Product 1"
            class="w-full sm:w-[180px] h-[210px] object-cover"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/sm-img/texnoMic.png"
              alt="Product 2"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
            <img
              src="/sm-img/texnoPhone.png"
              alt="Product 3"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4 w-full sm:w-auto cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <img src="/sm-img/clozLogo.png" alt="Radius Logo" class="w-20" />
          <div class="text-primary">★ 4.5</div>
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src="/sm-img/cloz1.png"
            alt="Product 1"
            class="w-full sm:w-[180px] h-[210px] object-cover"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/sm-img/cloz2.png"
              alt="Product 2"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
            <img
              src="/sm-img/cloz3.png"
              alt="Product 3"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- View All Shops Button -->
    <div class="text-center">
      <router-link to="/magazine">
        <button class="bg-primary text-white px-4 py-2 rounded-md mt-2">
          Все магазины
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
