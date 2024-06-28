<template>
  <div class="container mx-auto px-4">
    <div class="flex pt-10 pl-[10px]">
      <a href="/"><p>Главная страница</p></a> /
      <a href="/magazine"> Все магазины</a>
    </div>

    <h2 class="text-orange-500 text-3xl font-bold mb-6 pl-[10px] mt-9">
      Ваши магазины
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="store in stores"
        :key="store.id"
        class="border rounded-lg p-4 cursor-pointer"
      >
        <router-link :to="store.link" class="block">
          <div class="flex items-center justify-between mb-4">
            <img :src="store.logo" :alt="store.name" class="w-20" />
            <div class="text-yellow-500">★ {{ store.rating }}</div>
          </div>
          <div class="text-gray-700 mb-2">
            {{ store.description }}
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <img
              :src="store.mainImage"
              :alt="store.products[0]"
              class="w-full sm:w-[180px] h-[210px] object-cover"
            />
            <div class="flex flex-col space-y-2 w-full sm:w-auto">
              <img
                v-for="(product, index) in store.products"
                :key="index"
                :src="product"
                :alt="'Product ' + (index + 1)"
                class="w-full sm:w-[160px] h-[100px] object-cover"
              />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stores: [
        {
          id: 1,
          link: "/mag",
          logo: "/radiusLogo.png",
          name: "Radius",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/radiusPhone.png",
          products: ["/radiusTv.png", "/radiusRef.png"],
        },
        {
          id: 2,
          link: "/mag",
          logo: "/texnomartLogo.png",
          name: "Texnomart",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/TexnoWash.png",
          products: ["/texnoMic.png", "/texnoPhone.png"],
        },
        {
          id: 3,
          link: "/mag",
          logo: "/clozLogo.png",
          name: "Cloz",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/cloz1.png",
          products: ["/cloz2.png", "/cloz3.png"],
        },
        {
          id: 4,
          link: "/mag",
          logo: "/eclipseLogo.png",
          name: "Eclipse",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/eclipse1.png",
          products: ["/eclipse2.png", "/eclipse3.png"],
        },
        {
          id: 5,
          link: "/mag",
          logo: "/kfkLogo.png",
          name: "KFK",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/kfk1.png",
          products: ["/kfk2.png", "/kfk3.png"],
        },
        {
          id: 6,
          link: "/mag",
          logo: "/ostoLogo.png",
          name: "Osto",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/osto1.png",
          products: ["/osto2.png", "/osto3.png"],
        },
        {
          id: 7,
          link: "/mag",
          logo: "/arisLogo.png",
          name: "Aris",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/aris1.png",
          products: ["/aris2.png", "/aris3.png"],
        },
        {
          id: 8,
          link: "/mag",
          logo: "/autoLogo.png",
          name: "Auto",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/auto1.png",
          products: ["/auto2.png", "/auto3.png"],
        },
        {
          id: 9,
          link: "/mag",
          logo: "/ddLogo.png",
          name: "DD",
          rating: "4.5",
          description:
            "Товары из категории Акции и скидки Товары из категории....",
          mainImage: "/dd1.png",
          products: ["/dd2.png", "/dd3.png"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.resW {
  width: calc(100% / 3 - 30px);
  margin: 15px;
}
</style>
