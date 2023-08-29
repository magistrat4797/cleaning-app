<template>
  <button :class="linkClasses" :type="type">
    <span class="icon mr-4" v-if="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span>
      <slot />
    </span>
  </button>
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
const linkClasses = 'btn d-inline-flex align-center px-4 rounded-pill text-white';

defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  icon: String
});
</script>
