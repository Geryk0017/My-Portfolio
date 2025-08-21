<script setup>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Navbar/Footer.vue'
import Loader from './components/Loader.vue'

import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // fake delay to simulate loading
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
  <div class="background min-h-screen overflow-hidden">
    <Navbar />
    <Loader v-if="loading" />
    <router-view v-else />
  </div>
  <Footer />
</template>
<style scoped>
.background {
  background-image: url('./assets/img/bg.jpg');
  background-size: cover;
}
</style>
