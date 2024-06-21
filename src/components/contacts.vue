
<script setup>

</script>

<template>
    <div class="container my-20">
        <p class="font-normal text-base leading-4 mb-12">Главная страница / Контакты</p>
        <h1 class="font-bold text-[42px] leading-[54px] mb-8 text-primary">Контакты</h1>
        <div class="lg:grid grid-cols-3 gap-[60px]">
            <div class="lg:col-span-2 h-full mb-10 ">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.381636622252!2d69.38180559116817!3d41.348205989475595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef70d07eb78c7%3A0x67a00a46ff764e74!2sKorzinka%20%E2%80%94%20Yugnakiy!5e0!3m2!1sru!2s!4v1718813474518!5m2!1sru!2s"  height="450" class="w-full max-w-auto mb-8" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             <div class="sm:flex gap-12 lg:block ">
             <div class="md:flex justify-start gap-[100px] mb-10">
                <div>
                    <p class="mb-2 text-sm font-normal">Телефон номер:</p>
                    <h3 class="text-xl font-medium">+998 (90) 123 45 67</h3>
                    <h3 class="text-xl font-medium">+99893 008 86 80</h3>
                </div>
                <div>
                    <p class="mb-2 text-sm font-normal">Адрес:</p>
                    <h3 class="text-xl font-medium">г Ташкент, р Чиланзар,</h3>
                    <h3 class="text-xl font-medium"> Гавхар 52</h3>
                </div>
             </div>
             <div>
                 <p class="mb-2 text-sm font-normal">E-mail:</p>
                 <a href="https://info@tujjor.uz" class="text-xl font-medium">info@tujjor.uz</a>
             </div>
            </div>
            </div>
            
                <div class="shadow-2xl bg-white sm:w-[400px] mx-auto lg:w-full self-start">
                    <form class="p-8">
                        <h3 class="text-xl font-medium mb-5">Отправте нам сообщение</h3>
                        <p class="text-base font-medium mb-1 mt-5">Имя</p>
                        <input type="text" required placeholder="Ваше имя" class="border-2 w-full max-w-auto  h-10 outline-none px-2 rounded-md">
                        <p class="text-base font-medium mb-1 mt-5">E-mail</p>
                        <input type="text" required placeholder="Ваш e-mail" class="border-2 w-full max-w-auto  h-10 outline-none px-2 rounded-md">
                        <p class="text-base font-medium mb-1 mt-5">Номер</p>
                        <input type="text" required placeholder="Ваш номер" class="border-2 w-full max-w-auto  h-10 outline-none px-2 rounded-md">
                        <p class="text-base font-medium mb-1 mt-5">Комментарий</p>
                        <textarea name="text" id="" required placeholder="Оставьте отзыв" class="border-2 w-full max-w-auto h-[126px] outline-none mb-5 px-2 rounded-md resize-none"></textarea>
                        <button class="text-white bg-primary w-full  max-w-auto h-10 rounded-md">Отправить сообщение</button>
                    </form>
                </div>
   

        </div>

    </div>
</template>



<style scoped>

</style>