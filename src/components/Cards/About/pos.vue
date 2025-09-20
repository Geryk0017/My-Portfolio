<template>
  <div class="p-5">
    <img :src="POS" alt="" />
  </div>

  <div class="p-5">
    <h1 class="font-primary text-secondary text-[20px]">POS</h1>
    <br />
    <p class="text-white">
      I created this POS project to explore how technology can simplify sales and inventory
      management. It also served as a way to strengthen my back-end skills by working on features
      such as transaction handling, database management, and product tracking, while still ensuring
      a smooth and user-friendly interface.
    </p>
  </div>
</template>

<script setup>
import POS from '@/assets/img/pos.png'
</script>
