<template>
  <section class="hero-box position-relative">
    <v-container class="py-0">
      <div
        class="hero-box__content position-relative d-flex align-center h-screen"
      >
        <div
          class="w-100 text-center d-flex justify-center"
          :class="{ 'justify-md-start w-md-50 text-md-left': hasImage }"
        >
          <div class="hero-box__content-inner">
            <div class="text-uppercase mb-4">
              <h3
                class="hero-box__subtitle font-weight-regular mb-3 text-sm-18"
              >
                <slot name="subtitle" />
              </h3>
              <h1 class="hero-box__title font-weight-bold text-dark-grey">
                <slot name="title" />
              </h1>
            </div>
            <p v-if="slots.text" class="hero-box__text"><slot name="text" /></p>
            <div><slot name="actions" /></div>
            <slot />
          </div>
        </div>
        <div
          class="hero-box__image d-none h-100 d-md-flex align-md-end w-md-50"
          v-if="hasImage"
        >
          <div class="hero-box__image-inner position-relative d-flex">
            <img src="@/assets/images/hero-img.png" />
          </div>
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
  background: url("@/assets/images/hero-bg.png") right top no-repeat;
  background-size: cover;
  min-height: 100vh;
  margin-top: -$header-height;
  padding-top: $header-height;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &::before {
    background: url("@/assets/images/ellipse-bg-2.svg") left 200px no-repeat;
  }
  &::after {
    background: url("@/assets/images/ellipse-bg.svg") right top no-repeat;
  }
  &__content {
    margin-top: -$header-height;
    z-index: 1;
    &::before,
    &::after {
      content: "";
      position: absolute;
      @include md {
        display: none;
      }
    }
    &::before {
      left: 7%;
      top: 15%;
      width: 60px;
      height: 90px;
      background: url("@/assets/images/sequins.svg") no-repeat;
    }
    &::after {
      right: 7%;
      bottom: 10%;
      width: 80px;
      height: 125px;
      background: url("@/assets/images/sequins-2.svg") no-repeat;
    }
    &-inner {
      max-width: $content-max-width;
    }
  }
  &__image {
    &-inner {
      &::before,
      &::after {
        content: "";
        position: absolute;
      }
      &::before {
        left: 36%;
        top: 17%;
        width: 60px;
        height: 90px;
        background: url("@/assets/images/sequins.svg") no-repeat;
      }
      &::after {
        right: -6%;
        top: 27%;
        width: 80px;
        height: 125px;
        background: url("@/assets/images/sequins-2.svg") no-repeat;
      }
    }
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

const slots = useSlots();

defineProps({
  hasImage: Boolean,
});
</script>
