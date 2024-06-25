<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ScrollTop from "../components/scrollTop.vue";
</script>

<template>
  <div>
    <Navbar />
    <ScrollTop />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
