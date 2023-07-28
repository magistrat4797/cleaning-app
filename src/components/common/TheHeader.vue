<template>
  <v-app-bar app :color="isScrolled ? 'grey-darken-4' : 'transparent'" class="header" elevation="0">
    <v-container class="d-flex py-0 h-100">
      <v-row align="center" no-gutters>
        <router-link to="/" class="d-flex align-center h-100" :class="isScrolled ? 'text-white' : 'text-black'">
          <logo-icon />
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

<style lang="scss">
  .header {
    transition: background-color .3s ease!important;
  }
</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import useMenu from '@/composables/useMenu';
import LogoIcon from '@/assets/logo.svg'

const sidebar = ref(false);
const isScrolled = ref(false);

const { menuItems, isMobile } = useMenu(
  [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
  ],
);

const toggleSidebar = () => {
  sidebar.value = !sidebar.value;
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)  
});
</script>