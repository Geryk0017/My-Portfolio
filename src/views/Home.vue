<template>
  <div class="h-screen p-5 flex items-center justify-center">
    <div class="w-full h-[500px] text-center text-white">
      <p
        class="md:text-[50px] font-primary animate-fade-in-left duration-500 [animation-delay:200ms]"
      >
        Hello, I'm Geryk
      </p>
      <p
        class="md:text-[40px] font-tertiary animate-fade-in-right duration-500 [animation-delay:400ms]"
      >
        Front-End Developer crafting modern, user-friendly web experiences
      </p>

      <div class="text-center font-primary pt-[100px]">
        <p
          class="text-[40px] md:text-[120px] font-bold text-white/20 animate-zoom-in [animation-delay:600ms]"
        >
          FRONT END DEV
        </p>
        <div class="flex justify-center">
          <Download class="animate-slide-up-fade [animation-delay:1000ms]" />
        </div>
      </div>
    </div>
  </div>
  <!-- TESTIMONIALS -->
  <div class="w-full h-full p-15">
    <div class="w-full h-full">
      <div data-aos="fade-right">
        <p class="text-white font-primary text-center md:text-[50px] md:text-left">TESTIMONIALS</p>
      </div>

      <div class="md:p-[50px] w-full"><Testimonials /></div>
    </div>
  </div>
  <!-- LEARNING PLATFORMS -->
  <div class="w-full h-full p-15 pb-15">
    <div class="w-full h-full">
      <div data-aos="zoom-in" class="mb-15">
        <p class="text-white font-primary text-center md:text-[50px] md:text-left">
          MY LEARNING PLATFORMS
        </p>

        <p class="font-secondary text-white text-[18px]">
          I’m continuously learning and improving my skills in front-end development. My journey has
          <br />
          allowed me to explore both coding and UI design while building real-world projects.
        </p>
      </div>

      <div class="w-full">
        <div class="w-full min-h-screen grid md:grid-cols-4 md:grid-rows-3 gap-4">
          <div
            data-aos="fade-right"
            class="h-[250px] md:h-full md:col-span-2 bg-[#000000]/50 shadow-lg shadow-white/20 rounded-lg flex items-center justify-center"
          >
            <img :src="GG" alt="Image 1" class="max-w-full max-h-full object-contain" />
          </div>

          <div
            data-aos="zoom-in"
            class="h-[250px] md:h-full md:row-span-2 bg-[#000000]/50 shadow-lg shadow-white/20 rounded-lg flex items-center justify-center"
          >
            <img :src="W3schools" alt="Image 1" class="max-w-full max-h-full object-contain" />
          </div>

          <div
            data-aos="fade-left"
            class="h-[250px] md:h-full bg-[#000000]/50 shadow-lg shadow-white/20 rounded-lg flex items-center justify-center"
          >
            <img :src="Google" alt="Image 1" class="p-15 max-w-full max-h-full object-contain" />
          </div>

          <div
            data-aos="fade-up"
            class="h-[250px] md:h-full bg-[#000000]/50 shadow-lg shadow-white/20 rounded-lg flex items-center justify-center"
          >
            <img :src="yt" alt="Image 1" class="p-10 max-w-full max-h-full object-contain" />
          </div>

          <div
            data-aos="fade-left"
            class="h-[250px] md:h-full bg-[#000000]/50 shadow-lg shadow-white/20 rounded-lg flex items-center justify-center"
          >
            <img :src="fcc" alt="Image 1" class="p-10 max-w-full max-h-full object-contain" />
          </div>

          <div
            data-aos="fade-right"
            class="h-[250px] md:h-full bg-[#000000]/50 shadow-lg shadow-white/20 rounded-lg flex items-center justify-center"
          >
            <img :src="figma" alt="Image 1" class="p-10 max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Download from '@/components/Buttons/Download.vue'
import Testimonials from '@/components/Cards/Testimonials.vue'
import W3schools from '@/assets/img/w3schools.png'
import GG from '@/assets/img/GG_Logo.png'
import Google from '@/assets/img/google.png'
import yt from '@/assets/img/youtube.png'
import fcc from '@/assets/img/fcc.png'
import figma from '@/assets/img/figma.png'
</script>
