// import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import "./style.css";
import App from "./App.vue";
import router from "./router";



const pinia = createPinia()
const app = createApp(App);
// app.use(Vue3Toasity);

app.use(router);
app.use(pinia)
app.mount("#app");

