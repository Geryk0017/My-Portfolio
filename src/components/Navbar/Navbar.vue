<template>
  <!-- NAV BAR -->
  <nav class="h-[100px] w-full hidden justify-center md:flex">
    <div class="h-[100px] w-full flex justify-between">
      <div>
        <p class="font-primary text-center text-[50px] text-white font-bold pl-10 leading-25">
          MARTIN
        </p>
      </div>

      <div class="flex">
        <ul class="leading-25 text-white text-[24px] pr-10">
          <li class="hover:scale-140 transition ease-in-out duration-300">
            <RouterLink :to="'/'" class=""> Home </RouterLink>
          </li>
        </ul>
        <ul class="leading-25 text-white text-[24px] pr-10">
          <li class="hover:scale-140 transition ease-in-out duration-300">
            <RouterLink :to="'/works'"> Works </RouterLink>
          </li>
        </ul>
        <ul class="leading-25 text-white text-[24px] pr-10">
          <li class="hover:scale-140 transition ease-in-out duration-300">
            <RouterLink :to="'/about'"> About </RouterLink>
          </li>
        </ul>
        <ul class="text-white text-[24px] pr-10 pt-5">
          <li>
            <RouterLink :to="'/contact'"> <ContactBt /> </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <MobileNavBar />
</template>

<script setup>
import MobileNavBar from './MobileNavBar.vue'
import ContactBt from '../Buttons/ContactBt.vue'
</script>
