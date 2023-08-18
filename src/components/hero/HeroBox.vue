<template>
  <section class="hero-box">
    <v-container class="py-0">
      
      <p v-if="slots.subtitle" class="hero-box__subtitle"><slot name="subtitle" /></p>

      <h1 v-if="slots.title" class="hero-box__title"><slot name="title" /></h1>
      <p v-if="slots.text" class="hero-box__text"><slot name="text" /></p>
      <base-link to="/contact">Get a Quote</base-link>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
  .hero-box {
    background: url('@/assets/images/hero-bg.png') center no-repeat;
    background-size: cover;
    min-height: 100vh;
    margin-top: -64px;
    padding-top: 64px;
    @include lg {
      margin-top: -128px;
      padding-top: 128px;
    }
  }
</style>

<script setup lang="ts">
import { useSlots } from "vue";

import BaseLink from "@/components/base/BaseLink.vue";

const slots = useSlots();
</script>
