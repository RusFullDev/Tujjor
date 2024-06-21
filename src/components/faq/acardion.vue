<script setup>
import { ref } from "vue";
const isOpen = ref(false);
function openAcordion() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="acardion w-full mx-auto md:mb-5 ">
    <div
      class="header px-4 pb-4 rounded-md flex justify-start items-center gap-5 cursor-pointer"
      @click="openAcordion"
    >
      <span class="duration-200" :class="isOpen ? 'rotate-90' : ''"
        ><img src="/icons/Group 102.png" alt=""
      /></span>
      <span
        :class="isOpen ? 'text-primary' : 'text-black'"
        class="sm:text-base leading-5 md:text-xl font-bold"
        >Название любого вопроса из этой сферы деятельности?</span
      >
    </div>
    <div
      class="body  md:pl-[50px] lg:pl-[100px] overflow-hidden duration-200"
      :class="isOpen ? 'max-h-[500px]' : 'max-h-0'"
    >
      <div class="bg-gray-100 text-[#666666] p-8 text-normal sm:text-sm md:text-base ">
        <p class="mb-5">
          Лента LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по
          проекту установлена на поверхности стеклянного фасада, под
          козырьком-отливом, и подключена к блокам OSRAM Optotronic OTi DALI
          75/220-240/24, по 1-му на каждый комплект ленты(6м). Лента укреплена с
          помощью кабельных стяжек. Лента, установлена по периметру фасада на
          уровне 6-ти и 18м. Всего уложено 84м.
        </p>
        <p class="">
          После монтажных работ конструкция отработала в режиме технического
          прогона с сентября по 3-ю декаду ноября. В процессе монтажа выявлено,
          что некоторые отрезки 6-ти метровой ленты имеют мерцание. Лента
          LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по проекту
          установлена на поверхности стеклянного фасада, под козырьком-отливом,
          и подключена к блокам OSRAM Optotronic OTi DALI 75/220-240/24, по 1-му
          на каждый комплект ленты(6м).
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
