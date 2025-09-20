<template>
  <div class="p-5">
    <img :src="Burger" alt="" />
  </div>

  <div class="p-5">
    <h1 class="font-primary text-secondary text-[20px]">Burger</h1>
    <br />
    <p class="text-white">
      I started this burger website project as a way to practice and improve my web development
      skills while combining it with something fun and relatable—food. Burgers felt like the perfect
      theme because they’re simple, customizable, and loved by many, making the project both
      enjoyable and a great showcase of my design and coding abilities.
    </p>
  </div>
</template>

<script setup>
import Burger from '@/assets/img/burger.png'
</script>
