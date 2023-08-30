<template>
  <section class="partners-box">
    <div class="partners-box__list-block bg-primary pb-8 pb-md-10 pt-4 pt-md-4">
      <v-container class="py-0">
        <div
          class="partners-box__list d-flex flex-wrap justify-center align-center"
        >
          <div
            class="partners-box__list-item d-flex align-center mt-4 mt-md-6"
            v-for="partner in partners"
            :key="partner.name"
          >
            <component :is="partner.icon" />
          </div>
        </div>
      </v-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "sass:math";

@import "@/assets/styles/styles.scss";
$partners-gap: 30px;
$partners-gap-desktop: 60px;

$partner-padding: math.div($partners-gap, 2);
$partner-padding-desktop: math.div($partners-gap-desktop, 2);

.partners-box {
  &__list {
    margin: 0 (-$partner-padding);
    &-item {
      padding: 0 $partner-padding;
      opacity: 0.4;
      transition: opacity 0.3s;
      &:hover {
        opacity: 1;
      }
    }
    @include md {
      margin: 0 (-$partner-padding-desktop);
      &-item {
        padding: 0 $partner-padding-desktop;
      }
    }
  }
}
</style>

<script setup lang="ts">
defineProps({
  hasImage: Boolean,
  partners: Array,
});
</script>
