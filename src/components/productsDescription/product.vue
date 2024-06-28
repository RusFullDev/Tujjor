<script setup>
import { ref } from "vue";
const selectedOption = ref("");

const product = defineProps({
  product: Object,
});

const selectedQuantity = ref(1);
const calculatedPrice = ref(product.product.price);

const increaseQuantity = () => {
  selectedQuantity.value++;
  calculatedPrice.value = product.product.price * selectedQuantity.value;
};

// Method to decrease quantity (optional if needed)
const decreaseQuantity = () => {
  if (selectedQuantity.value > 1) {
    selectedQuantity.value--;
    calculatedPrice.value = product.product.price * selectedQuantity.value;
  }
};
</script>

<template>
  <div class="py-5">
    <div class="container" v-for="item in product" :key="item.id">
      <div class="flex gap-3">
        <p>Главная страница</p>
        <p>/</p>
        <p>Рубашки</p>
        <p>/</p>
        <p>Базовая рубашка</p>
      </div>
      <h2 class="text-5xl text-[#F7931F] font-medium py-3">Базовая рубашка</h2>
      <div class="md:flex items-center gap-5 w-full max-sm:flex-col">
        <div class="grid grid-cols-5 md:w-1/2 gap-2 h-full">
          <img :src="item.img1" alt="" />
          <img :src="item.mainImage" alt="" class="col-span-4 row-span-4" />
          <img :src="item.img2" alt="" />
          <img :src="item.img3" alt="" />
          <img :src="item.img4" alt="" />
        </div>
        <div
          class="flex flex-col gap-3 md:w-1/2"
          v-for="item in product"
          :key="item.id"
        >
          <h3 class="text-2xl text-[#023047] font-semibold">{{item.name}}</h3>
          <div class="md:flex items-center gap-5 justify-between max-sm:flex-col">
            <div
              class="flex border border-[#F7931F] rounded py-2 px-4 text-[#F7931F] gap-2 text-[22px] font-semibold md:w-full max-sm:w-full max-lg:w-full"
            >
              <p>Цена:</p>
              <span>{{ calculatedPrice }}</span>
              <p>CУМ</p>
            </div>
            <div
              class="flex gap-2 text-[22px] font-semibold items-center w-full max-sm:py-5 max-lg:py-5"
            >
              <p>Количество:</p>
              <div class="flex">
                <div class="border py-2 px-4 bg-[#C4C4C4] font-bold cursor-pointer" @click="decreaseQuantity">-</div>
                <div class="border py-2 px-4">
                  <div class="flex gap-3">
                    <span>{{ selectedQuantity }}</span>
                    <p>шт.</p>
                  </div>
                </div>
                <div class="border py-2 px-4 bg-[#F7931F] text-white font-bold cursor-pointer" @click="increaseQuantity">
                  +
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-2xl text-[#023047] font-semibold">Цвет</h3>
          <div class="flex gap-5">
            <div class="w-10 h-10 bg-slate-600 border rounded"></div>
            <div class="w-10 h-10 border bg-yellow-400 rounded"></div>
            <div class="w-10 h-10 bg-blue-500 border rounded"></div>
            <div class="w-10 h-10 bg-green-500 border rounded"></div>
          </div>
          <h3 class="text-2xl text-[#023047] font-semibold">Размер</h3>
          <div class="flex justify-between font-normal">
            <section>
              <label for="XXL">XXL-44</label>
              <input
                type="radio"
                value="XXL"
                v-model="selectedOption"
                class="mx-2"
              />
            </section>
            <section>
              <label for="M">M-38</label>
              <input
                type="radio"
                value="M"
                v-model="selectedOption"
                class="mx-2"
              />
            </section>
            <section>
              <label for="XL">XL-42</label>
              <input
                type="radio"
                value="XL"
                v-model="selectedOption"
                class="mx-2"
              />
            </section>
            <section>
              <label for="S">S-36</label>
              <input
                type="radio"
                value="S"
                v-model="selectedOption"
                class="mx-2"
              />
            </section>
            <section>
              <label for="L">L-40</label>
              <input
                type="radio"
                value="L"
                v-model="selectedOption"
                class="mx-2"
              />
            </section>
          </div>
          <div class="grid md:grid-cols-2">
            <div class="flex flex-col gap-3">
              <div class="flex gap-2">
                <p class="font-semibold">SKU:</p>
                <span>{{ item.sku }}</span>
              </div>
              <div class="flex gap-2">
                <p class="font-semibold">Посадка:</p>
                <span>{{ item.posadka }}</span>
              </div>
              <div class="flex gap-2">
                <p class="font-semibold">Рейтинг:</p>
                <span>{{ item.rating }}</span>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex gap-2">
                <p class="font-semibold">Крой:</p>
                <span>{{ item.kroy }}</span>
              </div>
              <div class="flex gap-2">
                <p class="font-semibold">Состав:</p>
                <span>{{ item.sostav }}</span>
              </div>
              <div class="flex gap-2">
                <p class="font-semibold">В избранное:</p>
                <span @click="item.vIzbranniy = !item.vIzbranniy" class="cursor-pointer">{{ item.vIzbranniy? 'saqlangan' : 'saqlanmagan' }}</span>
              </div>
            </div>
          </div>
          <hr />
          <p class="text-[14px] text-[#666666]">
            {{ item.description }}
          </p>
          <div class="flex gap-[85px] py-6">
            <button
              class="bg-[#003466] px-4 py-2 font-medium text-white rounded shadow-lg"
            >
              Купить
            </button>
            <button
              class="bg-[#F7931E] px-4 py-2 font-medium text-white rounded shadow-lg"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>