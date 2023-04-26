<template>
  <v-main>
    <the-header />
    <router-view />
    <the-footer />
  </v-main>
</template>

<script lang="ts" setup>
  import TheHeader from '@/components/common/TheHeader.vue';
  import TheFooter from '@/components/common/TheFooter.vue';
</script>
