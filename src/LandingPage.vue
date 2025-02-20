<template>
  <div class="pt-16 px-8 md:px-0">
    <ImageModal :isOpen="isModalOpen" :imageSrc="currentImage" @close="closeModal" />
    <title
      v-if="landingPage" 
      class="block text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center leading-tight"
      :style="{ color: landingPage.titleColor }"
    >{{ landingPage.title }}</title>
    <section class="container mx-auto py-12 mt-10">
      <div class="md:flex md:items-center md:space-x-8">
        <div class="md:w-1/2 flex justify-center">
          <img
            v-if="landingPage.heroImage"
            :src="landingPage.heroImage ? landingPage.heroImage.url : ''"
            :alt="landingPage.heroImage ? landingPage.heroImage.description : ''"
            class="max-w-full max-h-[50vh] md:max-h-[60vh] rounded-lg shadow-md cursor-pointer"
            @click="landingPage.heroImage && openModal(landingPage.heroImage.url)"
          />
        </div>
        <div class="md:w-1/2">
          <p class="text-gray-700 mt-4 md:mt-0 font-semibold" v-if="landingPage.heroImage">
            {{ landingPage.heroImage.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-14 h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start justify-center">
      <div v-for="image in images" :key="image.id" class="flex flex-col h-full items-start">
        <div class="w-full max-w-[240px] aspect-[9/16] overflow-hidden flex-none mx-auto">
          <img :src="image.url" :alt="image.alt" class="w-full h-full object-cover cursor-pointer" @click="openModal(image.url)" />
        </div>
        <p class="mt-2 text-center w-full">{{ image.description }}</p>
      </div>
    </div>
  </section>

  </div>
</template>

<script>
import ImageModal from './components/Modal.vue'

export default {
  name: 'LandingPage',
  components: { ImageModal },
  data() {
    return {
      landingPage: {},
      images: [],
      backgroundColors: {},
      isModalOpen: false,
      currentImage: ''
    }
  },
  methods: {
    async fetchLandingPage() {
      try {
        const response = await fetch('/api/landing-page')
        if (!response.ok) throw new Error('Failed to fetch landing page data')
        this.landingPage = await response.json()
        console.log("Landing data: ", this.landingPage)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSectionImages() {
      try {
        const response = await fetch('/api/section-images')
        if (!response.ok) throw new Error('Failed to fetch section images data')
        const data = await response.json()
        this.images = data.map(image => ({
          ...image,
          alt: image.description
        }))
      } catch (error) {
        console.error(error)
      }
    },
    async fetchBackgroundColors() {
      try {
        const response = await fetch('/api/background-colors')
        if (!response.ok) throw new Error('Failed to fetch background colors data')
        this.backgroundColors = await response.json()
      } catch (error) {
        console.error(error)
      }
    },
    openModal(url) {
      this.currentImage = url
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.currentImage = ''
    }
  },
  created() {
    this.fetchLandingPage()
    this.fetchSectionImages()
    this.fetchBackgroundColors()
  }
}
</script>
