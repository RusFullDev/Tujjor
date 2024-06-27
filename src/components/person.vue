<script setup>
import { ref } from "vue";

// Retrieve and parse the user item from localStorage
const userString = localStorage.getItem("user");
const user = JSON.parse(userString);

console.log("user", user);
console.log("username", user.username);

// Create a ref for the image URL
const profileImage = ref(user.image);
const userFullName = ref(user.firstName + " " + user.lastName);
</script>

<template>
  <div class="bg-primary  py-8">
    <div class="container flex justify-end gap-[350px]">
      <!-- Profile Image -->
      <div class="text-center">
        <img class="ml-4" :src="profileImage" alt="Profile Image" />
        <h3 class="text-white text-[26px] py-2">{{ userFullName }}</h3>
        <p class="text-white text-[20px]">id:{{ user.id }}</p>
      </div>
      <!-- Profile Image -->

      <div>
        <button class="text-black bg-white border rounded-md py-3 px-6">Редактировать профиль</button>
      </div>
    </div>
  </div>

  <!-- a -->
   <div class="container flex gap-6 justify-center mt-14">
    <img src="/sm-img/kupleno.png" alt="">
    <img src="/sm-img/kupleno.png" alt="">
    <img src="/sm-img/kupleno.png" alt="">
   </div>



</template>

<style scoped>
/* Add your styles here */
</style>
