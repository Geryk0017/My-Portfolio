<template>
  <div class="w-full h-full pt-5">
    <div class="w-full h-full">
      <h1 class="font-primary text-white text-[25px] text-center md:text-[50px] animate-fade-in">
        My Projects
      </h1>
      <p
        class="font-secondary text-white text-center p-5 animate-fade-in [animation-delay:600ms] md:text-[15px]"
      >
        Here you’ll find a collection of my works — some are complete applications, while others
        focus mainly on UI design and front-end practice. Each project helped me sharpen my skills,
        experiment with ideas, and explore different approaches to building engaging user
        experiences.
      </p>
    </div>
  </div>

  <!-- CARDS -->
  <div class="w-full h-full grid md:grid-rows-1 md:grid-cols-3 p-5 md:p-0 md:place-items-center">
    <div class="m-5 h-[550px] md:m-5 md:w-[550px] bg-slate-950"><Burger /></div>
    <div class="m-5 h-[650px] md:m-5 md:w-[550px] bg-slate-950"><POS /></div>
    <div class="m-5 h-[550px] md:m-5 md:w-[550px] bg-slate-950"><capstone /></div>
  </div>
</template>
<script setup>
import Burger from '@/components/Cards/About/burger.vue'
import POS from '@/components/Cards/About/pos.vue'
import capstone from '@/components/Cards/About/capstone.vue'
</script>
