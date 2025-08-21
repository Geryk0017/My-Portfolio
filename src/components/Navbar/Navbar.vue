<template>
  <!-- NAV BAR -->
  <nav class="h-[100px] w-full hidden justify-center md:flex">
    <div class="bg-primary h-[100px] w-full flex justify-between">
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

<!-- 
<div
      class="w-[1500px] h-[100px] bg-primary/25 [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)] flex items-center justify-center"
    >
      <div>
        <ul class="flex text-white">
          <li
            class="cursor-pointer pl-10 text-[24px] hover:text-secondary hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <RouterLink :to="'/'"> Home </RouterLink>
          </li>
          <li
            class="cursor-pointer pl-10 text-[24px] hover:text-secondary hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <RouterLink :to="'/works'"> Works </RouterLink>
          </li>
        </ul>
      </div>
      <div
        class="w-[550px] h-[100px] bg-primary/75 [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]"
      >
        <p class="font-primary text-center leading-25 text-[50px] text-white font-bold">MARTIN</p>
      </div>

      <div>
        <ul class="flex text-white">
          <li
            class="cursor-pointer pl-10 text-[24px] hover:text-secondary hover:scale-110 transition-transform duration-300 ease-in-out leading-20"
          >
            <RouterLink :to="'/about'"> About </RouterLink>
          </li>
          <li class="pl-10">
            <RouterLink :to="'/contact'"> <ContactBt /> </RouterLink>
          </li>
        </ul>
      </div>
    </div>

-->
