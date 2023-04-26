<template>
  <v-app-bar app class="header">
    <v-container class="d-flex py-0 h-100">
      <v-row align="center" no-gutters>
        <router-link to="/" class="d-flex align-center h-100">
          <img src="@/assets/logo.png">
        </router-link>
        <v-spacer />
        <v-app-bar-nav-icon v-if="isMobile" @click="toggleSidebar()"></v-app-bar-nav-icon>
        <v-toolbar-items v-else>
          <v-btn
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            router
          >
            <v-icon left v-if="item.icon">{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
          </v-btn>
        </v-toolbar-items>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer v-model="sidebar" v-if="isMobile" app location="right">
    <v-list>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        router
      >
        <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useMenu from '@/composables/useMenu';

const sidebar = ref(false);

const { menuItems, isMobile } = useMenu(
  [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
  ],
);

const toggleSidebar = () => {
  sidebar.value = !sidebar.value;
}
</script>