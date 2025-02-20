import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { makeServer } from "./mirage/server";

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === "production" || process.env.MIRAGE_ENABLED === 'true') {
  makeServer({ environment: process.env.NODE_ENV });
}

createApp(App).mount('#app')
