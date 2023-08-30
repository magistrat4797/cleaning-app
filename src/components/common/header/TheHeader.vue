<template>
  <v-app-bar
    app
    :density="density"
    :class="navColor"
    class="header"
    elevation="0"
  >
    <v-container class="py-0 h-100">
      <v-row align="center" no-gutters class="h-100">
        <v-col class="v-col-auto">
          <logo-block :color="textColor" />
        </v-col>
        <v-spacer />
        <v-col class="v-col-auto">
          <v-app-bar-nav-icon
            v-if="isMobile"
            @click="toggleSidebar"
            :ripple="false"
            class="w-auto"
          />
          <v-toolbar-items v-else>
            <v-btn
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.path"
              router
              :ripple="false"
              variant="text"
              :class="`text-${textColor}`"
            >
              <v-icon left v-if="item.icon">{{ item.icon }}</v-icon>
              <span>{{ item.title }}</span>
            </v-btn>
          </v-toolbar-items>
        </v-col>
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
      <v-list-item v-for="(item, index) in navItems" :key="index" class="pa-0">
        <v-btn
          :to="item.path"
          router
          :ripple="false"
          variant="text"
          class="h-100"
          :class="`text-${textColor}`"
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
      color: $color-primary !important;
    }
  }
}
.header {
  transition:
    background-color 0.3s ease,
    height 0.3s ease !important;
}
.sidebar {
  .v-list:deep(.v-list-item__content) {
    height: 100%;
  }
}
</style>

<script setup lang="ts">
import useHeader from "@/components/common/header/composables/useHeader";
import LogoBlock from "@/components/logo/LogoBlock.vue";
import { NavItem } from "@/models/NavModels";

const navItems: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
];

const { isMobile, density, navColor, textColor, sidebar, toggleSidebar } =
  useHeader(navItems);
</script>
