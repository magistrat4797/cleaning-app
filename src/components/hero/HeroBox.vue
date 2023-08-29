<template>
  <section class="hero-box position-relative">
    <v-container class="py-0">
      <div class="hero-box__content position-relative d-flex align-center h-screen">
        <div class="w-100 text-center d-flex justify-center" :class="{'justify-md-start w-md-50 text-md-left': hasImage}">
          <div class="hero-box__content-inner">
            <base-heading v-if="slots.subtitle || slots.title" :position="hasImage ? 'left' : ''">
              <template v-if="slots.subtitle" #subtitle>
                <h3 class="hero-box__subtitle font-weight-regular text-sm-18"><slot name="subtitle" /></h3>
              </template>
              <template v-if="slots.title" #title>
                <h1 class="hero-box__title"><slot name="title" /></h1>
              </template>
            </base-heading>
            <p v-if="slots.text" class="hero-box__text"><slot name="text" /></p>
            <base-link to="/contact" class="mt-4 mt-md-6">Get a Quote</base-link>
          </div>
        </div>
        <div class="hero-box__image d-none h-100 d-md-flex align-md-end w-md-50" v-if="hasImage">
          <img src="@/assets/images/hero-img.png" />
        </div>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
$header-height: 64px;
$header-height-desktop: 128px;

$content-max-width: 470px;

@import "@/assets/styles/styles.scss";
  .hero-box {
    background: url('@/assets/images/hero-bg.png') right top no-repeat;
    background-size: cover;
    min-height: 100vh;
    margin-top: -$header-height;
    padding-top: $header-height;
    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    &::before {
      background: url('@/assets/images/ellipse-bg-2.svg') left 200px no-repeat;
    }
    &::after {
      background: url('@/assets/images/ellipse-bg.svg') right top no-repeat;
    }
    &__content {
      margin-top: -$header-height;
      z-index: 1;
      &-inner {
        max-width: $content-max-width;
      }
    }
    &__image {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &__title {
      font-size: 29px;
      line-height: 1.1;
    }
    @include sm {
      &__title {
        font-size: 42px;
      }
    }
    @include md {
      &__title {
        font-size: 46px;
      }
    }
    @include lg {
      margin-top: -$header-height-desktop;
      padding-top: $header-height-desktop;
      &__content {
      margin-top: -$header-height-desktop;
      }
      &__title {
        font-size: 48px;
      }
    }
  }
</style>

<script setup lang="ts">
import { useSlots } from "vue";

import BaseLink from "@/components/base/BaseLink.vue";
import BaseHeading from "@/components/base/BaseHeading.vue";

const slots = useSlots();

defineProps({
  hasImage: Boolean
})
</script>
