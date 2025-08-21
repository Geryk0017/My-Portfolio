<template>
  <div class="md:grid md:grid-cols-3 md:grid-rows-3">
    <div>
      <MaxxTestimonials data-aos="fade-left" class="md:hidden" />
      <MaxxTestimonials data-aos="fade-right" class="hidden md:block" />
    </div>

    <div>
      <SylvestTestimonials data-aos="fade-right" class="md:hidden" />
      <SylvestTestimonials data-aos="fade-down" class="hidden md:block" />
    </div>

    <div>
      <AtanTestimonials data-aos="fade-left" />
    </div>

    <div>
      <PrinceTestimonials data-aos="fade-right" />
    </div>

    <div>
      <KyleTestimonials data-aos="fade-left" class="md:hidden" />
      <KyleTestimonials data-aos="fade-up" class="hidden md:block" />
    </div>

    <div>
      <BevTestimonials data-aos="fade-right" class="md:hidden" />
      <BevTestimonials data-aos="fade-left" class="hidden md:block" />
    </div>
  </div>
</template>
<script setup>
import MaxxTestimonials from './MaxxTestimonials.vue'
import SylvestTestimonials from './SylvestTestimonials.vue'
import AtanTestimonials from './AtanTestimonials.vue'
import PrinceTestimonials from './PrinceTestimonials.vue'
import KyleTestimonials from './KyleTestimonials.vue'
import BevTestimonials from './BevTestimonials.vue'
</script>
