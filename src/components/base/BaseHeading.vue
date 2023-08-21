<template>
  <div
    class="heading mb-2 mb-md-4 w-full text-center text-uppercase"
    :class="{
      'text-md-left': position == 'left',
      'text-md-right': position == 'right',
    }"
  >
    <div
      v-if="slots.subtitle"
      class="heading__subtitle font-weight-medium"
    >
      <slot name="subtitle" />
    </div>
    <div
      v-if="slots.title"
      class="heading__title font-weight-bold"
    >
      <slot name="title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();

defineProps({
  position: {
    type: String,
    validator: (prop: string) => ["left", "right"].includes(prop),
  }
});
</script>
