<template>
  <div class="pt-16 px-8 md:px-0">
    <ImageModal :isOpen="isModalOpen" :imageSrc="currentImage" @close="closeModal" />
    <title
      v-if="landingPage"
      class="block text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center leading-tight"
      :style="{ color: landingPage.titleColor }"
    >{{ landingPage.title }}</title>
    <HeroImage :heroImage="landingPage.heroImage" @open-image="openModal" />
    <ImageCarousel :images="images" @open-image="openModal" />
  </div>
</template>

<script>
import ImageModal from './components/Modal.vue'
import HeroImage from './components/HeroImage.vue'
import ImageCarousel from './components/ImageCarousel.vue'
export default {
  name: 'LandingPage',
  components: { ImageModal, HeroImage, ImageCarousel },
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
