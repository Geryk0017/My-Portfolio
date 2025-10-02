<script setup>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Navbar/Footer.vue'
import Loader from './components/Loader.vue'
import DarkVeil from './components/Background/DarkVeil.vue'

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
  <div class="app-container">
    <!-- Background -->
    <DarkVeil
      class="background"
      :hue-shift="0"
      :noise-intensity="0"
      :scanline-intensity="0"
      :speed="0.5"
      :scanline-frequency="0"
      :warp-amount="0"
      :resolution-scale="1"
    />

    <!-- Foreground Content -->
    <div class="content">
      <Navbar />
      <main class="main-content">
        <Loader v-if="loading" />
        <router-view v-else />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.background {
  position: fixed; /* stays in place and covers the whole page */
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ensures full height */
}

.main-content {
  flex: 1; /* pushes footer down */
}
</style>
