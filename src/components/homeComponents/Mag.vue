<template>
  <div class="container mx-auto">
    <div class="flex pt-10 pl-[10px]">
      <a href="/"><p>Главная страница</p></a> /
      <a href="/magazine"> Все магазины</a> /
      <a href="/mag">Аристократка</a>
    </div>

    <header
      class="flex justify-between items-center p-5 border-b border-gray-300 pt-10"
    >
      <img src="/magazin.png" alt="" />
    </header>

    <div class="flex mt-5">
      <aside class="w-64 p-5 border-r border-gray-300">
        <h3 class="font-semibold mb-2">Диапазон цен</h3>
        <input
          type="range"
          min="5"
          max="1000"
          v-model="priceRange"
          class="w-full border"
        />
        <p class="mt-2">{{ priceRange }} USD</p>

        <h3 class="font-semibold mt-5 mb-2">Фильтр по брендам</h3>
        <div class="space-y-1">
          <label class="flex items-center">
            <input
              type="checkbox"
              value="Essence"
              v-model="selectedBrands"
              class="mr-2"
            />
            Essence
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              value="Calvin Klein"
              v-model="selectedBrands"
              class="mr-2"
            />
            Calvin Klein
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              value="Dior"
              v-model="selectedBrands"
              class="mr-2"
            />
            Dior
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              value="Gucci"
              v-model="selectedBrands"
              class="mr-2"
            />
            Gucci
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              value="Chanel"
              v-model="selectedBrands"
              class="mr-2"
            />
            Chanel
          </label>
          <!-- Add other brands here -->
        </div>
      </aside>

      <main class="flex-1 p-5">
        <div
          class="shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="border p-4 flex flex-col items-center"
          >
            <img
              :src="product.thumbnail"
              alt="Product Image"
              class="w-full h-64 object-cover mb-4"
            />
            <h3 class="font-semibold text-center">{{ product.title }}</h3>
            <p class="mt-2 text-center">{{ product.price }} USD</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      priceRange: 500,
      selectedBrands: [],
      products: [],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesPrice = product.price <= this.priceRange;
        const matchesBrand =
          this.selectedBrands.length === 0 ||
          this.selectedBrands.includes(product.brand);
        return matchesPrice && matchesBrand;
      });
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.products = response.data.products;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style>
.container {
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.logo img {
  height: 50px;
}

.logo h1 {
  margin: 0;
  font-size: 24px;
}

.contact p {
  margin: 5px 0;
}

.content {
  display: flex;
}

aside {
  width: 200px;
  padding: 20px;
  border-right: 1px solid #ddd;
}

main {
  flex: 1;
  padding: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  width: calc(33.333% - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card img {
  max-width: 100%;
  height: auto;
}
</style>
