<script setup>
import {useCounterStore} from '../../store/index'
const counterStore = useCounterStore()
import {onMounted, ref} from 'vue';

const props=defineProps({
    data: Object
})

const countData = ref(1);

const increment = () => {
    countData.value++;
    counterStore.price += props.data.price
}
const decrement = () => {
    if(countData.value > 0){
        countData.value--;
    counterStore.price -= props.data.price
    }
    
}

onMounted(() => {
    counterStore.price += props.data.price;
})
</script>

<template>
    <div class="shadow-md bg-white max-h-[210px] max-h-auto w-full max-w-auto">
<div class="grid grid-cols-3 p-5 ">
<div class="flex gap-5 items-center mb-[100px]">
    <img src="/img\Mask Group.png" alt="" class="w-full h-full">
    <div>
        <h3 class="text-bold text-lg mb-1">POLO  рубашка</h3>
        <p class="w-[169px] text-normal text-sm mb-11">Рубашка с контрастным дизайном</p>
        <p class="text-normal text-sm">Размер: XXL - 44</p>
    </div>
</div>
<div class=" flex gap-[90px] col-span-2">
<div class="">
<div class="flex items-center gap-2 mb-8">
<p class="font-normal text-base leading-4">Количество:</p>
<div class="flex gap-10 border border-[#C4C4C4] rounded-sm items-center text-center">
    <button @click="decrement" class="w-10 h-11 bg-grayn rounded-md text-black text-3xl">-</button>
    {{ countData }}шт
    <button @click="increment" class="w-10 h-11 bg-primary rounded-md text-white text-3xl">+</button>
</div>
</div>
    <div class="flex gap-3 items-center px-11">
        <p class="font-normal text-base leading-4">Цвет:</p>
        <img src="\img\Mask Group color.png" alt="">
    </div>
</div>

<div>
    <p class="font-bold text-3xl text-primary mb-12 text-end">{{countData * props.data.price}}cум</p>
    <div class="flex gap-6">
        <button class="text-white font-medium text-base hover:bg-primary bg-[#023047] py-2 px-7  rounded-md border-none">Оформить  заказ</button>
        <button class="text-white font-medium text-base hover:bg-primary bg-[#023047] py-3 px-7 rounded-md border-none">Стереть</button>
    </div>
</div>
</div>
</div>
    </div>
</template>



<style  scoped>

</style>