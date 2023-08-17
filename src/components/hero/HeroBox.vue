<template>
  <div class="hero-box" :style="topSpacing">
    <v-container class="py-0">
      <p class="hero-box__subtitle">Highly Professional Cleaning</p>
      <h1 class="hero-box__title">Easy To Clean House And Office</h1>
      <p class="hero-box__info">Amet minim mollit non deserunt ullamco  sit aliqua dolor do amet sint. Velit officia enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <a href="#">Get a Quote</a>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
  .hero-box {
    min-height: 100vh;
    background: lightblue;
    
  }
</style>

<script setup lang="ts">
import useHeaderHeight from "@/components/common/header/composables/useHeaderHeight";
import useHeroStyle from "@/components/hero/composables/useHeroStyle";
const { headerHeight } = useHeaderHeight();
const { topSpacing } = useHeroStyle(headerHeight);

</script>