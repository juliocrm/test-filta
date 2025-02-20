import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { makeServer } from "./mirage/server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createApp(App).mount('#app')
