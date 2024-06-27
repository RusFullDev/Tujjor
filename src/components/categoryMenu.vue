<template>
  <div class="flex">
    <!-- Main Categories -->
    <div class="bg-yellow-100 p-4 w-1/4">
      <ul>
        <li
          v-for="(category, index) in mainCategories"
          :key="index"
          @click="selectCategory(index)"
          :class="{'text-orange-500 font-bold': selectedCategory === index, 'text-gray-800': selectedCategory !== index}"
          class="cursor-pointer py-2"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>

    <!-- Subcategories -->
    <div class="bg-gray-50 p-4 w-3/4 flex flex-wrap">
      <div v-for="(subcategory, index) in subcategories" :key="index" class="w-1/3 p-2 h-full">
        <h3 class="font-semibold mb-2">{{ subcategory.name }}</h3>
        <ul>
          <li v-for="(item, itemIndex) in subcategory.items" :key="itemIndex" class="py-1 text-gray-600 cursor-pointer">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const mainCategories = ref([
      { name: 'Одежда', subcategories: [
          { name: 'Женщинам', items: ['Одежда', 'Обувь', 'Аксессуары', 'Нижнее белье', 'Чулки, носки, колготки', 'Домашняя одежда', 'Одежда для беременных', 'Купальники и пляжная одежда'] },
          { name: 'Детям', items: ['Одежда', 'Обувь', 'Школьная форма', 'Аксессуары детские', 'Спорт и развлечения'] },
          { name: 'Спецодежда', items: ['Спецодежда рабочая', 'Обувь рабочая', 'Медицинская одежда', 'Сигнальная одежда', 'Влагозащитная одежда', 'Поваром и официантам', 'Для пищевой промышленности', 'Одежда для погребения', 'Форменная одежда', 'Форма для охранников', 'Аксессуары', 'Обувь медицинская', 'Академическая одежда'] },
          { name: 'Мужчинам', items: ['Одежда', 'Обувь', 'Нижнее белье', 'Носки'] },
          { name: 'Уход за одеждой', items: ['Женская обувь', 'Книги', 'Детские товары', 'Электроника', 'Дом и сад', 'Спорт и развлечения'] },
        ]},
      { name: 'Бытовая техника' },
      { name: 'Книги' },
      { name: 'Детские товары' },
      { name: 'Электроника' },
      { name: 'Дом и сад' },
      { name: 'Спорт и развлечения' },
      { name: 'Красота и здоровье' },
      { name: 'Автомобили и мотоциклы' },
      { name: 'Ремонт и обустройство дома' },
      { name: 'Наращивание волос и парики' },
      { name: 'Аптека' },
      { name: 'Товары для животных' },
      { name: 'Туризм, рыбалка, охота' },
    ]);

    const selectedCategory = ref(0);
    const subcategories = ref(mainCategories.value[0].subcategories);

    const selectCategory = (index) => {
      selectedCategory.value = index;
      subcategories.value = mainCategories.value[index].subcategories || [];
    };

    return {
      mainCategories,
      selectedCategory,
      subcategories,
      selectCategory,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
