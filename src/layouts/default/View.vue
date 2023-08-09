<template>
  <the-header />
  <v-main>
    <router-view />
  </v-main>
  <the-footer />
</template>

<script lang="ts" setup>
import TheHeader from "@/components/common/header/TheHeader.vue";
import TheFooter from "@/components/common/footer/TheFooter.vue";
</script>
