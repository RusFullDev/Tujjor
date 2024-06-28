<template lang="">
  <div class="container">
    <div class="flex pt-10 pl-[10px]">
      <a href="/"><p>Главная страница</p></a> /
      <a href="/magazine"> Все магазины</a>
    </div>

    <h2 class="text-orange-500 text-3xl font-bold mb-6 pl-[10px] mt-9">
      Ваши магазины
    </h2>

    <div class="flex flex-wrap justify-center gap-4 w-full pb-10">
      <router-link to="/mag">
        <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
          <div class="flex items-center justify-between mb-4">
            <img src="/radiusLogo.png" alt="Radius Logo" class="w-20" />
            <div class="text-yellow-500">★ 4.5</div>
          </div>
          <div class="text-gray-700 mb-2">
            Товары из категории Акции и скидки Товары из <br />
            категории....
          </div>
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <img
              src="/radiusPhone.png"
              alt="Product 1"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                src="/radiusTv.png"
                alt="Product 2"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
              <img
                src="/radiusRef.png"
                alt="Product 3"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/mag">
        <div class="border rounded-lg p-4 w-full sm:w-auto cursor-pointer">
          <div class="flex items-center justify-between mb-4">
            <img src="/texnomartLogo.png" alt="Radius Logo" class="w-20" />
          </div>
          <div class="text-gray-700 mb-2">
            Товары из категории Акции и скидки Товары из <br />
            категории....
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <img
              src="/TexnoWash.png"
              alt="Product 1"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                src="/texnoMic.png"
                alt="Product 2"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
              <img
                src="/texnoPhone.png"
                alt="Product 3"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/mag">
        <div class="border rounded-lg p-4 w-full sm:w-auto cursor-pointer">
          <div class="flex items-center justify-between mb-4">
            <img src="/clozLogo.png" alt="Radius Logo" class="w-20" />
            <div class="text-yellow-500">★ 4.5</div>
          </div>
          <div class="text-gray-700 mb-2">
            Товары из категории Акции и скидки Товары из <br />
            категории....
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <img
              src="/cloz1.png"
              alt="Product 1"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                src="/cloz2.png"
                alt="Product 2"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
              <img
                src="/cloz3.png"
                alt="Product 3"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/mag">
        <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
          <div class="flex items-center justify-between mb-4">
            <img src="/eclipseLogo.png" alt="Radius Logo" class="w-20" />
            <div class="text-yellow-500">★ 4.5</div>
          </div>
          <div class="text-gray-700 mb-2">
            Товары из категории Акции и скидки Товары из <br />
            категории....
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <img
              src="/eclipse1.png"
              alt="Product 1"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                src="/eclipse2.png"
                alt="Product 2"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
              <img
                src="/eclipse3.png"
                alt="Product 3"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/mag">
        <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
          <div class="flex items-center justify-between mb-4">
            <img src="/kfkLogo.png" alt="Radius Logo" class="w-20" />
            <div class="text-yellow-500">★ 4.5</div>
          </div>
          <div class="text-gray-700 mb-2">
            Товары из категории Акции и скидки Товары из <br />
            категории....
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <img
              src="/kfk1.png"
              alt="Product 1"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                src="/kfk2.png"
                alt="Product 2"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
              <img
                src="/kfk3.png"
                alt="Product 3"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/mag">
        <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
          <div class="flex items-center justify-between mb-4">
            <img src="/ostoLogo.png" alt="Radius Logo" class="w-20" />
            <div class="text-yellow-500">★ 4.5</div>
          </div>
          <div class="text-gray-700 mb-2">
            Товары из категории Акции и скидки Товары из <br />
            категории....
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <img
              src="/osto1.png"
              alt="Product 1"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                src="/osto2.png"
                alt="Product 2"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
              <img
                src="/osto3.png"
                alt="Product 3"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </router-link>

      <a href="/mag">
        <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
          <div class="flex items-center justify-between mb-4">
            <img src="/arisLogo.png" alt="Radius Logo" class="w-20" />
            <div class="text-yellow-500">★ 4.5</div>
          </div>
          <div class="text-gray-700 mb-2">
            Товары из категории Акции и скидки Товары из <br />
            категории....
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <img
              src="/aris1.png"
              alt="Product 1"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                src="/aris2.png"
                alt="Product 2"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
              <img
                src="/aris3.png"
                alt="Product 3"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </a>

      <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
        <div class="flex items-center justify-between mb-4">
          <img src="/autoLogo.png" alt="Radius Logo" class="w-20" />
          <div class="text-yellow-500">★ 4.5</div>
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src="/auto1.png"
            alt="Product 1"
            class="w-full sm:w-[180px] h-[210px] object-cover"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/auto2.png"
              alt="Product 2"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
            <img
              src="/auto3.png"
              alt="Product 3"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
        <div class="flex items-center justify-between mb-4">
          <img src="/ddLogo.png" alt="Radius Logo" class="w-20" />
          <div class="text-yellow-500">★ 4.5</div>
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src="/dd1.png"
            alt="Product 1"
            class="w-full sm:w-[180px] h-[210px] object-cover"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/dd2.png"
              alt="Product 2"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
            <img
              src="/dd3.png"
              alt="Product 3"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
