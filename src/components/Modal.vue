<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" @click.self="handleClose">
      <div class="relative">
        <img :src="imageSrc" alt="Modal image" class="max-h-[80vh] w-auto object-contain" />
        <button class="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-900" @click="handleClose">✕</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageModal',
    props: {
      isOpen: { type: Boolean, required: true },
      imageSrc: { type: String, default: '' }
    },
    methods: {
      handleClose() {
        this.$emit('close')
      }
    }
  }
  </script>
  