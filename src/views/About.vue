<template>
  <div
    class="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-3 md:max-w-screen md:h-screen gap-4 m-10 mt-20"
  >
    <div class="md:row-span-2 order-2 md:order-1" data-aos="fade-right">
      <img :src="Me" class="h-full w-full rounded-xl" />
    </div>

    <div
      class="bg-[#460BBD] rounded-xl flex flex-col justify-between text-white p-5 h-full order-4 md:order-1"
      data-aos="fade-down"
    >
      <div class="font-secondary text-center">College 2021-2025</div>
      <div class="font-primary text-center text-[25px]">Rizal Technological University (BSIT)</div>
    </div>

    <div
      class="md:row-span-2 md:col-span-2 flex flex-col items-center justify-center m-5 order-1 md:order-2"
    >
      <h1 class="font-primary text-secondary text-[25px] md:text-[50px] text-center">About Me</h1>
      <p class="text-white text-[12px] md:text-[15px] text-center font-secondary">
        I’m Geryk a passionate developer who enjoys turning ideas into interactive and user-friendly
        experiences. With a strong focus on front-end development and continuous learning, I love
        experimenting with new tools and frameworks while constantly improving my skills. Beyond
        coding, I’m someone who values creativity, collaboration, and growth.
      </p>
    </div>

    <div
      class="bg-[#460BBD] rounded-xl flex flex-col justify-between text-white p-5 order-3"
      data-aos="fade-up"
    >
      <div class="font-secondary text-center">Senior High School</div>
      <div class="font-primary text-center text-[25px]">STI College Cubao (ITMAWD)</div>
    </div>
  </div>

  <div class="min-h-screen m-10">
    <div class="text-center md:text-left" data-aos="zoom-in">
      <h1 class="text-secondary font-primary text-[25px] md:text-[50px]">
        The Tools Behind My Work
      </h1>
      <p class="font-secondary text-[15px] md:text-[25px] text-white">
        I specialize in building responsive and interactive user interfaces that offer smooth and
        engaging user experiences.
      </p>
    </div>

    <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-6 gap-10 mt-10">
      <!-- Images 1-6: fade-right -->
      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-right"
      >
        <img :src="img1" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-right"
      >
        <img :src="img2" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-right"
      >
        <img :src="img3" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-right"
      >
        <img :src="img4" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-right"
      >
        <img :src="img5" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-right"
      >
        <img :src="img6" class="w-full h-full p-5" />
      </div>

      <!-- Images 7-12: fade-left -->
      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-left"
      >
        <img :src="img7" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-left"
      >
        <img :src="img8" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-left"
      >
        <img :src="img9" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-left"
      >
        <img :src="img10" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-left"
      >
        <img :src="img11" class="w-full h-full p-5" />
      </div>

      <div
        class="bg-white/20 backdrop-blur-md h-[150px] md:h-[250px] rounded-xl"
        data-aos="fade-left"
      >
        <img :src="img12" class="w-full h-full p-5" />
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '@/assets/img/skills/1.png'
import img2 from '@/assets/img/skills/2.png'
import img3 from '@/assets/img/skills/3.png'
import img4 from '@/assets/img/skills/4.png'
import img5 from '@/assets/img/skills/5.png'
import img6 from '@/assets/img/skills/6.png'
import img7 from '@/assets/img/skills/7.png'
import img8 from '@/assets/img/skills/8.png'
import img9 from '@/assets/img/skills/9.png'
import img10 from '@/assets/img/skills/10.png'
import img11 from '@/assets/img/skills/11.png'
import img12 from '@/assets/img/skills/12.png'

import Me from '@/assets/img/Me.jpg'
</script>
