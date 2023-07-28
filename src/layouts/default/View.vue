<template>
  <the-header />
  <v-main>
    <router-view />
  </v-main>
  <the-footer />
</template>

<script lang="ts" setup>
  import TheHeader from '@/components/common/TheHeader.vue';
  import TheFooter from '@/components/common/TheFooter.vue';
</script>
