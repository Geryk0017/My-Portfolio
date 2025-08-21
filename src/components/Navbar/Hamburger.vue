<template>
  <label @click="isOpen = !isOpen">
    <div class="rounded-sm w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
      <!-- Top bar -->
      <div
        class="w-[80%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left"
        :class="isOpen ? 'rotate-[-45deg] translate-y-[12px]' : 'translate-y-[10px]'"
      ></div>

      <!-- Middle bar -->
      <div
        class="w-[100%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center"
        :class="isOpen ? 'opacity-0' : 'opacity-100'"
      ></div>

      <!-- Bottom bar -->
      <div
        class="w-[80%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left"
        :class="isOpen ? 'rotate-[45deg] -translate-y-[12px]' : '-translate-y-[10px]'"
      ></div>
    </div>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false) // controls hamburger → X
</script>
