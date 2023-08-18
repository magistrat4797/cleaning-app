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
