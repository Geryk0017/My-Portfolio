<template>
  <!-- HEADER -->
  <header class="md:hidden sticky top-0 z-50">
    <nav class="flex justify-between h-[100px] bg-primary/70">
      <div class="p-5 leading-15">
        <p class="text-[20px] text-white font-primary">MARTIN</p>
      </div>

      <div class="m-8">
        <Hamburger @click="toggleNavbar" />
      </div>
    </nav>
  </header>

  <!-- OVERLAY MENU -->
  <nav
    v-show="showNavbar"
    class="absolute top-[100px] flex flex-col w-full h-full bg-primary font-secondary p-5 md:hidden z-40"
  >
    <ul class="pt-5 text-white p-5">
      <li class="cursor-pointer text-[24px] border-b-2 pb-5 mb-15">
        <RouterLink :to="'/'"> Home </RouterLink>
      </li>
      <li class="cursor-pointer text-[24px] border-b-2 pb-5 mb-15">
        <RouterLink :to="'/works'"> Works </RouterLink>
      </li>
      <li class="cursor-pointer text-[24px] border-b-2 pb-5 mb-15">
        <RouterLink :to="'/about'"> About </RouterLink>
      </li>
      <li class="cursor-pointer text-[24px] border-b-2 pb-5 mb-15">
        <RouterLink :to="'/contact'"> <ContactBt /> </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import Hamburger from './Hamburger.vue'
import ContactBt from '../Buttons/ContactBt.vue'
const showNavbar = ref(false)
function toggleNavbar() {
  showNavbar.value = !showNavbar.value
}
</script>
