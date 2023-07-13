<template>
  <v-footer app>
    <v-toolbar-items>
      <v-btn
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        router
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-footer>
</template>

<script setup lang="ts">
import useMenu from '@/composables/useMenu';

const { menuItems } = useMenu([
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
]);
</script>