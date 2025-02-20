<template>
    <section class="container mx-auto py-12 mt-10">
      <div class="md:flex md:items-center md:space-x-8">
        <div class="md:w-1/2 flex justify-center">
          <img
            v-if="heroImage"
            :src="heroImage.url"
            :alt="heroImage.description"
            class="max-w-full max-h-[50vh] md:max-h-[60vh] rounded-lg shadow-md cursor-pointer"
            @click="handleClick"
          />
        </div>
        <div class="md:w-1/2">
          <p class="text-gray-700 mt-4 md:mt-0 font-semibold" v-if="heroImage">
            {{ heroImage.description }}
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroImage',
    props: {
      heroImage: {
        type: Object,
        required: false
      }
    },
    methods: {
      handleClick() {
        if (this.heroImage) {
          this.$emit('open-image', this.heroImage.url)
        }
      }
    }
  }
  </script>
  