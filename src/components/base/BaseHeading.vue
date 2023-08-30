<template>
  <div
    class="heading mb-4 w-full text-center text-uppercase"
    :class="{
      'text-md-left': position == 'left',
      'text-md-right': position == 'right',
    }"
  >
    <div
      v-if="slots.subtitle"
      class="heading__subtitle font-weight-medium mb-3 text-sm-18 text-primary"
    >
      <slot name="subtitle" />
    </div>
    <div
      v-if="slots.title"
      class="heading__title font-weight-bold text-dark-grey text-29 text-md-32"
    >
      <slot name="title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heading {
  &__title {
    line-height: 1.1;
  }
}
</style>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();

defineProps({
  position: {
    type: String,
    validator: (prop: string) => ["left", "right"].includes(prop),
  },
});
</script>
