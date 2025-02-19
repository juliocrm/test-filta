<template>
    <div>
        <ImageModal :isOpen="isModalOpen" :imageSrc="currentImage" @close="closeModal" />
        <title></title>
        <section class="container mx-auto py-12">
            <div class="md:flex md:items-center md:space-x-8">
                <div class="md:w-1/2">
                    <img src="https://media.istockphoto.com/id/1343574927/photo/landscape-near-elbow-in-rh%C3%B6n.jpg?s=612x612&w=0&k=20&c=zgYlNBVufruUcWJvF5CNEvFZTWIdsZihLaaNPBpVIYs=" alt="Test image description" class="w-full h-auto rounded-lg shadow-md">
                </div>
                <div class="md:w-1/2">
                    <p class="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
            </div>
        </section>

        <section class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="image in images" :key="image.id" class="flex flex-col items-center">
                <div class="w-full aspect-[9/16] overflow-hidden">
                    <img :src="image.url" :alt="image.alt" class="w-full h-full object-cover cursor-pointer" @click="openModal(image.url)" />
                </div>
                <p class="mt-2 text-center">{{ image.description }}</p>
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
      images: [
        { id: 1, url: 'https://i.pinimg.com/736x/b4/4e/87/b44e87858cc70b06c0064c4c9c64a2db.jpg', alt: 'Image 1', description: 'Description for image 1' },
        { id: 2, url: 'https://i.pinimg.com/736x/9a/39/22/9a392291887ea4113e48966b929a1ad3.jpg', alt: 'Image 2', description: 'Description for image 2' },
        { id: 3, url: 'https://i.pinimg.com/736x/93/9e/a8/939ea8de0c247c04fb5344873ab19301.jpg', alt: 'Image 3', description: 'Description for image 3' }
      ],
      isModalOpen: false,
      currentImage: ''
    }
  },
  methods: {
    openModal(url) {
      this.currentImage = url
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.currentImage = ''
    }
  }
}
</script>