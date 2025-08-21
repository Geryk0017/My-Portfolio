<template>
  <nav class="md:hidden flex justify-between h-[100px] bg-primary/70">
    <div class="p-5 leading-15">
      <p class="text-[20px] text-white font-primary">MARTIN</p>
    </div>

    <div class="m-8">
      <Hamburger @click="toggleNavbar" />
    </div>
  </nav>

  <nav v-show="showNavbar" class="w-full h-full bg-primary font-secondary p-5 md:hidden">
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
