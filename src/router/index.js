import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/",
      component: () => import("../layouts/Default.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../pages/Home.vue"),
        },
        {
          path: "about-us",
          name: "about-us",
          component: () => import("../pages/AboutUs.vue"),
        },
        {
          path: "all-stores",
          name: "all-stores",
          component: () => import("../pages/AllStores.vue"),
        },
        {
          path: "all-stores/:id",
          name: "all-stores-details",
          component: () => import("../pages/AllStoresDetails.vue"),
        },
        {
          path: "contacts",
          name: "contacts",
          component: () => import("../pages/Contacts.vue"),
        },
        {
          path: "faq",
          name: "faq",
          component: () => import("../pages/Faq.vue"),
        },
        {
          path: "my-order",
          name: "my-order",
          component: () => import("../pages/MyOrder.vue"),
        },
        {
          path: "news",
          name: "news",
          component: () => import("../pages/News.vue"),
        },
        {
          path: "news/:id",
          name: "news-details",
          component: () => import("../pages/NewsDetails.vue"),
        },
        {
          path: "on-the-road",
          name: "on-the-road",
          component: () => import("../pages/OnTheRoad.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../pages/Orders.vue"),
        },
        {
          path: "personal",
          name: "personal",
          component: () => import("../pages/Personal.vue"),
        },
        {
          path: "personal-data",
          name: "personal-data",
          component: () => import("../pages/PersonalData.vue"),
        },
        {
          path: "search-products",
          name: "search-products",
          component: () => import("../pages/SearchProducts.vue"),
        },
        {
          path: "product-decription/:id",
          name: "products-description",
          component: () => import("../pages/ProductDescription.vue"),
        },
        {
          path: "products",
          name: "products",
          component: () => import("../pages/Products.vue"),
        },
        {
          path: "product/:id",
          name: "products-details",
          component: () => import("../pages/ProductDetails.vue"),
        },
        {
          path: "purchesed",
          name: "purchesed",
          component: () => import("../pages/Purchesed.vue"),
        },
        {
          path: "shopping-card",
          name: "shopping-card",
          component: () => import("../pages/ShoppingCart.vue"),
        },
        {
          path: "/magazine",
          name: "magazine",
          component: () => import("../pages/MagazinePage.vue"),
        },
        {
          path: "/mag",
          name: "mag",
          component: () => import("../pages/Mag.vue"),
        },
      ],
    },
    {
      path: "/authorization",
      name: "authorization",
      component: () => import("../pages/Authorization.vue"),
    },
    {
      path: "/register",
      name: "registration",
      component: () => import("../pages/Registration.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/Login.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../pages/Error.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const isLoggedin = JSON.parse(localStorage.getItem("user"));

  if (!isLoggedin && to.name != "login") {
    return { name: "login" };
  }
});

export default router;
