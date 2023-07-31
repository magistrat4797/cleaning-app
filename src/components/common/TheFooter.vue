<template>
  <v-footer class="py-5 bg-secondary">
    <v-container class="py-0">
      <v-row no-gutters>
        <newsletter-box
          :title="'Subscribe To Our News Letter'"
          :text="'Subscribe our news letter to get latest news and updates'"
        />
      </v-row>
      <v-row align="center" no-gutters>
        <router-link to="/" class="d-flex align-center h-100 text-white">
          <logo-icon />
        </router-link>
        <v-spacer />
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
      </v-row>
      <v-row no-gutters>
        Copyright by Cleanex @ 2023. All rights reserved
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import LogoIcon from "@/assets/images/logo.svg";
import { MenuItem } from "@/models/MenuItem";
import NewsletterBox from "@/components/NewsletterBox.vue";

const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
];
</script>
