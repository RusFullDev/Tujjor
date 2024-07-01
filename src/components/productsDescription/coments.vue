<script>
export default {
  data() {
    return {
      reviews: [],
      visibleReviews: [],
      newReview: {
        name: "",
        email: "",
        comment: "",
      },
    };
  },
  created() {
    this.fetchReviews();
  },
  methods: {
    fetchReviews() {
      const hardcoreReviews = [
        {
          id: 1,
          user: { username: "Турсунов Асор" },
          rating: 4,
          body: "Качество ткани хорошее, но если вы предпочитаете оверсайз, выбирайте размер меньше вашего, например, слишком свободные рукава.",
          date: "2021-04-30",
        },
        {
          id: 2,
          user: { username: "Ахмад Собиров" },
          rating: 5,
          body: "Ткань по своей фактуре - это не ткань, которая создает очень мелкие морщинки, занимает все ваше тело, качество проявляется в любом виде.",
          date: "2021-04-21",
        },
        {
          id: 3,
          user: { username: "Улугбек Мустаков" },
          rating: 4,
          body: "Полноразмерное качество красивое",
          date: "2021-04-26",
        },
      ];

      fetch("https://dummyjson.com/comments?limit=7")
        .then((response) => response.json())
        .then((data) => {
          const fetchedReviews = data.comments;

          this.reviews = [...hardcoreReviews, ...fetchedReviews];

          this.visibleReviews = this.reviews.slice(0, 3);
        })
        .catch((error) => console.error("Error fetching reviews:", error));
    },
    showMoreReviews() {
      const currentLength = this.visibleReviews.length;
      const moreReviews = this.reviews.slice(currentLength, currentLength + 3);
      this.visibleReviews = [...this.visibleReviews, ...moreReviews];
    },
    submitReview() {
      if (
        this.newReview.name &&
        this.newReview.email &&
        this.newReview.comment
      ) {
        const newReview = {
          id: this.reviews.length + 1,
          user: {
            username: this.newReview.name,
          },
          rating: 5, // Default rating for new reviews
          body: this.newReview.comment,
          date: new Date().toISOString(),
        };
        this.reviews.push(newReview);
        this.visibleReviews = [...this.reviews]; // Update visibleReviews to show the new review
        this.newReview.name = "";
        this.newReview.email = "";
        this.newReview.comment = "";
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<template>
  <div>
    <h1>user Coments</h1>
  </div>

  <section class="container py-2">
    <div class="w-full">
      <img src="/image2.png" alt="" class="w-full" />
      <img src="/image1.png" alt="" class="w-full py-[56px]" />
    </div>

    <div class="mx-auto flex space-x-6 w-full">
      <!-- Reviews Section -->
      <div class="bg-white rounded-lg flex-1 p-6">
        <h2 class="text-2xl font-bold mb-4">
          Отзывы покупателей (<span class="text-blue-500">{{
            reviews.length
          }}</span
          >)
        </h2>

        <div v-for="review in visibleReviews" :key="review.id" class="mb-4">
          <div class="flex items-center mb-2 justify-between">
            <span class="font-semibold">{{ review.user.username }}</span>
            <div class="ml-2 flex justify-between">
              <span v-for="n in 5" :key="n" class="text-yellow-400">
                <svg
                  v-if="n <= review.rating"
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.982h5.244c.969 0 1.371 1.24.588 1.81l-4.237 3.064 1.618 4.982c.3.921-.755 1.688-1.538 1.118l-4.237-3.064-4.237 3.064c-.783.57-1.838-.197-1.538-1.118l1.618-4.982-4.237-3.064c-.783-.57-.38-1.81.588-1.81h5.244l1.618-4.982z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-4 h-4 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.982h5.244c.969 0 1.371 1.24.588 1.81l-4.237 3.064 1.618 4.982c.3.921-.755 1.688-1.538 1.118l-4.237-3.064-4.237 3.064c-.783.57-1.838-.197-1.538-1.118l1.618-4.982-4.237-3.064c-.783-.57-.38-1.81.588-1.81h5.244l1.618-4.982z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <p class="text-gray-700 mb-2">{{ review.body }}</p>

          <div class="flex justify-between">
            <p class="text-gray-500 text-sm">{{ formatDate(review.date) }}</p>
            <p class="text-blue-500 text-sm mt-1">✔️ Я купил товар</p>
          </div>
        </div>
        <div>
          <button
            @click="showMoreReviews"
            :disabled="visibleReviews.length >= reviews.length"
            class="border py-2 px-4 mt-4 text-blue-500"
          >
            Показать больше комментариев
          </button>
        </div>
      </div>

      <!-- Review Form Section -->
      <div class="bg-yellow-200 p-6 rounded-lg shadow-md w-1/3 max-h-[500px]">
        <h2 class="text-2xl font-bold mb-4">Оставьте ваш отзыв</h2>
        <form @submit.prevent="submitReview" class="flex flex-col space-y-4">
          <div class="mb-4">
            <input
              v-model="newReview.name"
              type="text"
              placeholder="Ваше имя"
              class="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="newReview.email"
              type="email"
              placeholder="Ваш e-mail"
              class="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div class="mb-4 py-5">
            <textarea
              v-model="newReview.comment"
              placeholder="Ваш отзыв"
              class="w-full p-2 border rounded-lg h-[150px]"
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="bg-yellow-500 text-white py-2 px-4 rounded-lg"
            >
              Отправить отзыв
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style></style>
