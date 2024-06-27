<script setup>
import CategoryMenu from "./categoryMenu.vue";
import { ref } from "vue";

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<template>
  <div class="sticky top-[-65px] z-50">
    <div class="bg-primary">
      <nav
        class="container flex flex-wrap items-center justify-between h-[60px]"
      >
        <div class="flex items-center space-x-4 h-full py-[12px]">
          <img
            src="/sm-img/Location-footer.png"
            alt="Location"
            class="w-6 h-6 sm:w-auto sm:h-auto"
          />
          <span class="text-white text-sm sm:text-base">
            г Ташкент, р<br />Чиланзар, Гавхар 52
          </span>
        </div>
        <div
          class="flex flex-wrap items-center space-x-4 h-full gap-[10px] sm:gap-[30px]"
        >
          <div class="flex items-center space-x-2">
            <img
              src="/sm-img/mail-footer.png"
              alt="Mail"
              class="w-6 h-6 sm:w-auto sm:h-auto"
            />
            <span class="text-white text-sm sm:text-base">info@tujjor.uz</span>
          </div>
          <div class="flex items-center space-x-2">
            <img
              src="/sm-img/phone-footer.png"
              alt="Phone"
              class="w-6 h-6 sm:w-auto sm:h-auto"
            />
            <span class="text-white text-sm sm:text-base"
              >+998 (90) 123 45 67</span
            >
          </div>
        </div>
      </nav>
    </div>

    <div class="shadow-xl w-full bg-white">
      <div class="container">
        <div class="flex flex-wrap items-center justify-between py-3">
          <a href="/home">
            <img
              src="/sm-img/Logo.png"
              alt="Logo"
              class="w-20 h-auto sm:w-auto sm:h-auto"
            />
          </a>
          <div class="flex flex-wrap gap-[10px] sm:gap-[35px] items-center">
            <div class="flex items-center space-x-2 w-full sm:w-auto">
              <div class="relative w-full sm:w-auto">
                <button
                  @click="toggleDropdown"
                  class="flex items-center justify-between px-2 py-1 border border-orange-400 text-orange-500 rounded w-full sm:w-[133px] h-[34px]"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="3"
                      height="3"
                      rx="1.5"
                      fill="#FB8500"
                      stroke="#F7931E"
                    />
                    <rect
                      x="6.49902"
                      y="0.5"
                      width="3"
                      height="3"
                      rx="1.5"
                      fill="#FB8500"
                      stroke="#F7931E"
                    />
                    <rect
                      x="0.5"
                      y="6.5"
                      width="3"
                      height="3"
                      rx="1.5"
                      fill="#FB8500"
                      stroke="#F7931E"
                    />
                    <rect
                      x="6.49902"
                      y="6.5"
                      width="3"
                      height="3"
                      rx="1.5"
                      fill="#FB8500"
                      stroke="#F7931E"
                    />
                  </svg>
                  Категории
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#F7931E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="relative flex justify-between w-full sm:w-[435px] h-[36px] pt-[1px]"
            >
              <input
                type="text"
                class="p-2 border border-orange-500 rounded-md focus:outline-none w-full h-[34px] pr-[40px]"
                placeholder="Поиск..."
              />
              <button
                class="absolute right-0 top-[1px] bg-orange-500 text-white rounded-r w-[36px] h-[34px] flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <button class="text-white w-6 h-6 sm:w-[27px] sm:h-[27px]">
              <img src="/sm-img/star.png" alt="Star" />
            </button>
            <button class="text-white relative w-6 h-6 sm:w-[27px] sm:h-[27px]">
              <img src="/sm-img/cart.png" alt="Cart" />
            </button>
            <button class="text-white w-6 h-6 sm:w-[27px] sm:h-[27px]">
              <img src="/sm-img/qrcode.png" alt="QR Code" />
            </button>
            <router-link to="personal">
              <button class="text-white w-6 h-6 sm:w-[27px] sm:h-[27px]">
                <img src="/sm-img/person.png" alt="Person" />
              </button>
            </router-link>
            <button class="text-black h-[27px] flex items-center gap-1">
              <img
                src="/sm-img/russia.png"
                alt="Russian Flag"
                class="w-4 h-4 sm:w-auto sm:h-auto"
              />
              <p class="ml-2">py</p>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="dropdownOpen"
      class="absolute container top-full left-0 bg-white border rounded-lg shadow-lg"
    >
      <CategoryMenu />
    </div>
  </div>
</template>
