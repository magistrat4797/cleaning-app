<template>
  <v-app-bar
    app
    :density="density"
    :class="navColor"
    class="header"
    elevation="0"
  >
    <v-container class="d-flex py-0 h-100">
      <v-row align="center" no-gutters>
        <router-link
          to="/"
          class="d-flex align-center h-100"
          :class="textColor"
        >
          <logo-icon />
        </router-link>
        <v-spacer />
        <v-app-bar-nav-icon
          v-if="isMobile"
          @click="toggleSidebar"
          :ripple="false"
        />
        <v-toolbar-items v-else>
          <v-btn
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            router
            :ripple="false"
            variant="text"
            :class="textColor"
          >
            <v-icon left v-if="item.icon">{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
          </v-btn>
        </v-toolbar-items>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
    app
    v-model="sidebar"
    v-if="isMobile"
    location="right"
    class="sidebar bg-secondary"
    border="0"
  >
    <v-list class="d-flex flex-column justify-center h-100">
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        class="pa-0"
      >
        <v-btn
          :to="item.path"
          router
          :ripple="false"
          variant="text"
          class="h-100"
          :class="textColor"
          block
          rounded="0"
        >
          <v-icon left v-if="item.icon">{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

.header,
.sidebar {
  .v-btn {
    &:deep(.v-btn__overlay) {
      background: transparent;
    }
    &:hover,
    &--active {
      color: $color-primary!important;
    }
  }
}
.header {
  transition: background-color 0.3s ease, height 0.3s ease !important;
}
.sidebar {
  .v-list:deep(.v-list-item__content) {
    height: 100%;
  }
}
</style>

<script setup lang="ts">
import useHeader from "@/composables/useHeader";
import LogoIcon from "@/assets/images/logo.svg";
import { MenuItem } from "@/models/MenuItem";

const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
];

const { isMobile, density, navColor, textColor, sidebar, toggleSidebar } = useHeader(menuItems);
</script>
