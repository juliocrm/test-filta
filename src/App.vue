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
  <div class="relative min-h-screen">
    <div class="fixed top-0 left-0 w-full h-full" :style="backgroundStyle"></div>
    <div class="relative w-full md:w-[70%] mx-auto">
      <LandingPage />
    </div>
  </div>
</template>