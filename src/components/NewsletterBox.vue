<template>
  <div class="bg-primary py-2 px-3">
    <div v-if="slots.title">
      <slot name="title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
});
</script>
