<template>
    <section class="container mx-auto py-12 mt-10">
      <div class="md:flex md:items-center md:space-x-8">
        <div class="md:w-1/2 flex justify-center">
          <img
            v-if="heroImage"
            :src="heroImage.url"
            :alt="heroImage.description"
            class="max-w-full max-h-[50vh] md:max-h-[60vh] rounded-lg shadow-md cursor-pointer hero-image"
            @click="handleClick"
          />
        </div>
        <div class="md:w-1/2">
          <p class="text-gray-700 mt-4 md:mt-0 font-semibold hero-text" v-if="heroImage">
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
  
  <style scoped>
  .hero-image {
    animation: slideDown 0.7s ease-in-out forwards;
  }
  .hero-text {
    animation: slideUp 0.7s ease-in-out forwards;
  }
  @keyframes slideDown {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>
  