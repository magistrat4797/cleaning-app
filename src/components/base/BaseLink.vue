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

  .btn {
    min-height: 40px;
    background-color: $bg-color-primary;
    &:hover {
      background-color: $bg-color-secondary;
    }
  }
</style>

<script setup lang="ts">
const linkClasses = 'btn d-inline-flex align-center px-4 rounded-pill text-white';

defineProps({
  to: { type: String, required: true },
  icon: String,
  target: String,
  external: Boolean
});
</script>
