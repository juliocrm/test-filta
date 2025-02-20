<template>
  <section class="container mx-auto py-14 h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start justify-center">
      <div v-for="image in images" :key="image.id" class="flex flex-col h-full items-start">
        <div class="w-full max-w-[240px] aspect-[9/16] overflow-hidden flex-none mx-auto">
          <img :src="image.url" :alt="image.alt" class="w-full h-full object-cover cursor-pointer" @click="handleClick(image.url)" />
        </div>
        <p class="mt-2 text-center w-full">{{ image.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick(url) {
      this.$emit('open-image', url)
    }
  }
}
</script>
