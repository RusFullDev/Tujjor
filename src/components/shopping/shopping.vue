<script setup>
import ShopingCard from './shopingCard.vue';
import {useCounterStore} from '../../store/index'
const counterStore = useCounterStore()

const backData = [
    {id: 1, title: '', price: 100000}, 
    {id: 2, title: '', price: 150000}, 
    {id: 3, title: '', price: 170000}, 
    {id: 4, title: '', price: 50000}, 
]
</script>

<template>
    <div class="container my-10">
        <h3 class="font-normal text-sm mb-10">Главная страница /  Корзина покупателя</h3>
<h1 class="font-medium text-5xl leading-[56px] text-primary mb-10">Корзина покупателя</h1>
<ShopingCard class="mb-8" v-for="item in backData" :data="item" :key="item.id" />

<!-- <div class="pt-8"> -->
<div class=" mb-[88px] border-t-2 border-grayn ">
    <div class="flex justify-between  pt-8">
    <div class="flex gap-3 items-center">
        <h4 class="font-normal text-3xl">Общая сумма:</h4>
       <h4 class="font-black text-primary text-3xl">{{counterStore.count * counterStore.price}} cум</h4>
    </div>
    <div class="flex gap-5 items-center">
        <button class="text-base text-white bg-[#023047] hover:bg-primary rounded-md border-none py-2 px-6">Оформить все заказы</button>
        <button class="text-base text-white bg-[#023047] hover:bg-primary rounded-md border-none py-2 px-6">Стереть все заказы</button>
    </div>
</div>
</div>
    </div>
<!-- </div> -->
</template>



<style  scoped>

</style>