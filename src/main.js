// import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
// app.use(Vue3Toasity);

app.use(router);
app.use(store);
app.mount("#app");

