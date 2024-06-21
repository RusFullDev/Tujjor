<template>
  <div class=" z-20 fixed w-full bottom-5 right-16">
    <div class="relative container">
      <button
        @click="scrollToTop"
        :class="{ 'scale-0': isNearTop, 'scale-100': !isNearTop }"

        class="text-center transform transition-transform duration-400 rounded-full w-[50px] h-[50px] absolute text-3xl flex items-center justify-center bg-primary bottom-0 text-k_white right-0"
      >
        <img src="/sm-img/up.png" alt="">
      </button>
    </div>
  </div>
</template>

<script setup>

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

</script>