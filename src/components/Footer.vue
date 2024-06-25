<script setup></script>
<template>
  <div class="bg-footer_color mt-24 py-14">
    <div class="container">
      <div class="container flex justify-between text-white items-start">
        <img src="/sm-img/Logo.png" alt="" />
        <div>
          <ul class="text-white">
            <li>
              <h2 class="text-[20px] font-semibold pb-2">Карта сайта</h2>
            </li>
            <router-link to="/home">
              <li class="py-1 text-[14px]">Главная страница</li></router-link
            >
            <router-link to="/about-us"
              ><li class="py-1 text-[14px]">О нас</li></router-link
            >
            <router-link to="category"
              ><li class="py-1 text-[14px]">Категории товара</li></router-link
            >
            <router-link to="/aksiya">
              <li class="py-1 text-[14px]">Акции</li></router-link
            >
            <router-link to="/news"
              ><li class="py-1 text-[14px]">Новости</li></router-link
            >
            <router-link to="/faq"
              ><li class="py-1 text-[14px]">FAQ</li></router-link
            >
            <router-link to="/personal">
              <li class="py-1 text-[14px]">Личный кабинет</li></router-link
            >
          </ul>
        </div>

        <div>
          <h2 class="text-[18px] font-semibold">Принимаем оплату через</h2>
          <img class="mt-10" src="/sm-img/payme.png" alt="" />
        </div>
        <div>
          <h2 class="text-[18px] font-semibold">Cоциальные сети</h2>
          <div class="flex gap-5 mt-6">
            <a href="https://telegram.org/">
              <img
                class="fill-yellow-600"
                src="/sm-img/telegram-footer.png"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/sm-img/instagram-footer.png" alt="" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="/sm-img/facebook-footer.png" alt="" />
            </a>
          </div>
        </div>
        <div>
          <h2 class="pb-2 text-[20px] font-semibold">Адрес</h2>
          <span class="flex items-center gap-2 mt-2 text-[14px] py-1"
            ><img src="/sm-img/Location-footer.png" alt="" />г Ташкент, р
            Чиланзар, Гавхар 52
          </span>
          <span class="flex items-center gap-2 mt-2 text-[14px] py-2"
            ><img src="/sm-img/mail-footer.png" alt="" />info@tujjor.uz</span
          >
          <span class="flex items-center gap-2 mt-2 text-[14px] py-2"
            ><img src="/sm-img/phone-footer.png" alt="" />+998 (90) 123 45
            67</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
