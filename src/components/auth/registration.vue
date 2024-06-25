<template>
  <div class="bg-[#eee] h-screen flex justify-center items-center">
    <div>
      <div class="flex items-center justify-center">
        <img src="/sm-img/Logo.png" alt="Main Logo" />
      </div>
      <form
        @submit.prevent="loginUser"
        class="flex flex-col gap-5 mt-8 px-[22px] md:pt-[18px] md:pb-[30px] py-[30px] bg-[#fff] rounded-[5px] max-md:w-full"
      >
        <div class="flex w-full justify-end items-center max-md:hidden">
          <button @click="router.push('/login')" class="text-[#023047]">
            &#x2716;
          </button>
        </div>
        <label for="username" class="text-[#6C6C6C] font-medium">
          Имя
          <input
            v-model="userData.name"
            id="username"
            class="w-full px-[15px] mt-1 py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#FEAF00] placeholder-[#CDCDCD] text-[12px]"
            type="text"
            placeholder="Ваше имя"
          />
        </label>
        <label for="username" class="text-[#6C6C6C] font-medium">
          Имя пользователя
          <input
            v-model="userData.username"
            id="username"
            class="w-full px-[15px] mt-1 py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#FEAF00] placeholder-[#CDCDCD] text-[12px]"
            type="text"
            placeholder="Введите имя пользователя"
          />
        </label>
        <label for="password" class="text-[#6C6C6C] font-medium relative">
          Пароль
          <input
            v-model="userData.password"
            id="password"
            class="w-full px-[15px] mt-1 py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#FEAF00] placeholder-[#CDCDCD] text-[12px]"
            :type="eyecheck ? 'password' : 'text'"
            placeholder="Введите пароль"
          />
          <img
            @click="eyecheck = !eyecheck"
            :src="eyecheck ? '/sm-img/hidden-eye.png' : '/sm-img/eye.png'"
            alt="eye"
            class="absolute top-1/2 w-[25px] right-0 -translate-x-1/2 cursor-pointer"
          />
        </label>

        <button
          type="button"
          @click.prevent="loginUser"
          class="w-full px-[15px] py-3 text-center rounded-[4px] hover:bg-[#ffcb5a] font-medium bg-[#FEAF00] text-[#FCF6F6]"
          style="box-shadow: 0px 1.96px 9.8px 0px #00000040"
        >
          Register
        </button>
        <a href="/login" class="text-[#023047] underline cursor-pointer"
          >Уже зарегистрирован?</a
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import api from "../../api/index.js";
import { useRouter } from "vue-router";

const eyecheck = ref(true);
const router = useRouter();

const userData = reactive({
  name: "",
  username: "",
  password: "",
});

const loginUser = () => {
  api
    .post("/auth/login", userData)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/home");
      console.log("res", res);
    })
    .catch((err) => {
      console.log("err", err);
      toast.error("Login failed. Please try again.");
    });
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
