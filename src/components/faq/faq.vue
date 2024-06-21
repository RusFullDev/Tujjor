
<script setup>
import Acordion from './acardion.vue';


</script>


<template>
    <div class="container my-20">
<p class="mb-10 font-normal text-base leading-4 ">Главная страница / FAQ</p>
<h1 class="font-bold sm:text-3xl md:text-[42px] md:leading-[54px] mb-10 text-primary">Часто задаемевый вопросы</h1>

<div class="lg:flex items-start gap-x-8">
    <div class="lg:w-2/3">
        <div class="lg:col-span-2 " v-for="item in 5">
            <Acordion/>
        </div>
    </div>
    
    <div class="bg-[#FCE3A4] h-full lg:w-1/3 rounded-md md:w-[373px] sm:flex sm:items-center md:mx-auto">
        <form class="p-8">
            <h3 class="mb-5 font-bold text-2xl">У вас есть вопросы</h3>
            <input type="text" required placeholder="Ваше имя" class="px-3 mb-5 border-2 rounded-md outline-none w-full h-10">
            <input type="text" required placeholder="Ваш e-mail" class="px-3 mb-5 border-2 rounded-md outline-none w-full h-10">
            <textarea name="text" id="text" required placeholder="Ваш отзыв" class="px-3 mb-8 border-2 rounded-md outline-none w-full h-[110px] text-left resize-none"></textarea>
            <div class="flex justify-center">
                <button class="bg-primary font-medium text-base leading-4 text-white h-10 w-[200px] rounded-md text-center">Отправить вопрос</button>
            </div>
        </form>

    </div>
</div>
    </div>



</template>



<style scoped>

</style>