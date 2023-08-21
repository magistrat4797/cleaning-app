<template>
  <section class="hero-box">
    <v-container class="py-0">
      <base-heading v-if="slots.subtitle || slots.title" position="left">
        <template v-if="slots.subtitle" #subtitle>
          <h3 class="hero-box__subtitle font-weight-regular"><slot name="subtitle" /></h3>
        </template>
        <template v-if="slots.title" #title>
          <h1 class="hero-box__title"><slot name="title" /></h1>
        </template>
      </base-heading>
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
import BaseHeading from "@/components/base/BaseHeading.vue";

const slots = useSlots();
</script>
