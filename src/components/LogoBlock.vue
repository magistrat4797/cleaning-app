<template>
  <div class="logo-block d-flex">
    <router-link to="/" class="d-inline-flex align-center h-100" :class="`text-${color}`">
      <logo-icon />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from "@/assets/images/logo.svg";

defineProps({
  color: {
    type: String,
    default: "black"
  }
});
</script>