<script setup>
import LandingPage from './LandingPage.vue';
</script>

<template>
  <div id="app" class="w-full">
    <div class="w-full md:w-[80%] mx-auto">
      <LandingPage/>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
