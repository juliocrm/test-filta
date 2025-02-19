<script setup>
import { ref, computed, onMounted } from 'vue'
import LandingPage from './LandingPage.vue'

const backgroundColors = ref({ start: '#ffffff', end: '#ffffff' })

async function fetchBackgroundColors() {
  try {
    const response = await fetch('/api/background-colors')
    if (!response.ok) throw new Error('Failed to fetch background colors')
    backgroundColors.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchBackgroundColors()
})

const backgroundStyle = computed(() => ({
  background: `radial-gradient(circle at center, ${backgroundColors.value.start}, ${backgroundColors.value.end})`
}))
</script>

<template>
  <div class="w-full" :style="backgroundStyle">
    <div class="w-full md:w-[70%] mx-auto">
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
