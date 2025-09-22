<template>
  <div class="w-full h-full pt-5">
    <div class="w-full h-full">
      <h1 class="font-primary text-white text-[25px] text-center md:text-[50px] animate-fade-in">
        My Projects
      </h1>
    </div>
  </div>

  <!-- CARDS -->
  <div class="min-h-screen">
    <div class="grid md:grid-cols-2 md:grid-rows-4 min-h-screen gap-4 sm:m-4">
      <div class="flex justify-center items-center">
        <burger-txt data-aos="fade-right" />
      </div>

      <div class="row-1 col-1 md:row-1 md:col-2">
        <burger class="sm:m-4" data-aos="zoom-in" />
      </div>

      <div class=""><pos class="sm:m-4" data-aos="zoom-in" /></div>

      <div class="flex justify-center items-center">
        <pos-txt data-aos="fade-left" />
      </div>

      <div class="flex justify-center items-center row-6 col-1 md:col-1 md:row-3">
        <capstone-txt data-aos="fade-right" />
      </div>

      <div class="h-full"><capstone class="sm:m-4" data-aos="zoom-in" /></div>
      <div class="h-full"><Project1 class="sm:m-4" data-aos="zoom-in" /></div>

      <div class="flex justify-center items-center">
        <project1-txt data-aos="fade-right" />
      </div>
    </div>

    <div class="relative h-[300px] md:h-full w-full">
      <!-- Image -->
      <img :src="frontend" class="w-full h-full object-cover" />

      <!-- Overlay content -->
      <div
        class="absolute inset-0 flex flex-col justify-center items-start pl-5 md:pl-10 space-y-2 md:space-y-4"
        data-aos="fade-right"
      >
        <p class="text-white text-xs md:text-2xl font-primary">Need help with your project?</p>
        <RouterLink
          :to="'/contact'"
          class="px-4 py-2 text-xs md:text-lg bg-secondary text-white rounded-lg shadow-lg hover:bg-secondary/90 transition"
        >
          Reach Out!
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import burger from '@/components/Cards/Works/burger.vue'
import capstone from '@/components/Cards/Works/capstone.vue'
import pos from '@/components/Cards/Works/pos.vue'
import capstoneTxt from '@/components/Cards/Works/capstone-txt.vue'
import burgerTxt from '@/components/Cards/Works/burger-txt.vue'
import posTxt from '@/components/Cards/Works/pos-txt.vue'
import Project1 from '@/components/Cards/Works/project1.vue'
import project1Txt from '@/components/Cards/Works/project1-txt.vue'
import frontend from '@/assets/img/frontend.jpg'
</script>
