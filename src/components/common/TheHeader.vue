<template>
  <v-app-bar app :density="isScrolled || isMobile || (isMobile && !isScrolled && sidebar) ? 'default' : 'prominent'" :class="isScrolled || (isMobile && !isScrolled && sidebar) ? 'bg-grey-darken-4' : 'bg-transparent'" class="header" elevation="0">
    <v-container class="d-flex py-0 h-100">
      <v-row align="center" no-gutters>
        <router-link to="/" class="d-flex align-center h-100" :class="isScrolled || (isMobile && !isScrolled && sidebar) ? 'text-white' : 'text-black'">
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
  <v-navigation-drawer v-model="sidebar" v-if="isMobile" app location="right" class="bg-grey-darken-4">
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
  .v-toolbar {
    transition: background-color 0.3s ease, height 0.3s ease!important;
  }
  .v-ripple__container {
    display: none!important;
  }
  .v-toolbar__content {
    .v-btn {
      &:hover,
      &--active {
        color: #1195FF;
        .v-btn__overlay {
          background: transparent;
        }
      } 
    }
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
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
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