<template>
  <router-link v-if="!external" :target="target" :to="to" :class="linkClasses">
    <span class="icon mr-2" v-if="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span>
      <slot />
    </span>
  </router-link>
  <a v-else :href="to" :target="target" :class="linkClasses">
    <span class="icon mr-2" v-if="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span>
      <slot />
    </span>
  </a>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

$btn-height: 45px;
$btn-height-desktop: 50px;
.btn {
  min-height: $btn-height;
  background-color: $bg-color-primary;
  @include md {
    min-height: $btn-height-desktop;
  }
  &:hover {
    background-color: $bg-color-secondary;
  }
}
</style>

<script setup lang="ts">
const linkClasses =
  "btn d-inline-flex align-center px-6 px-md-8 rounded-pill text-white";

defineProps({
  to: { type: String, required: true },
  icon: String,
  target: String,
  external: Boolean,
});
</script>
