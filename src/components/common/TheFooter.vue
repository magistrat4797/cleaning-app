<template>
  <v-footer class="footer px-0 py-10 bg-secondary">
    <v-container class="py-0">
      <v-row align="center" no-gutters>
        <v-col cols="4">
          <v-row no-gutters>
            <v-col>
              <router-link to="/" class="d-flex align-center h-100 text-white">
                <logo-icon />
              </router-link>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <div class="py-5">
                <p class="footer__desc">Amet minim mollit non deserunt ullamc est sit aliqua dolor  amet sint. Amet minim mollit non deserunt ullamco est sit aliqua.</p>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-list class="d-flex pa-0 overflow-visible" bg-color="transparent">
                <v-list-item v-for="socialLink in socialLinks" :key="socialLink.name" class="social-links__item pa-0">
                  <v-btn
                    :icon="socialLink.icon"
                    variant="text"
                    :href="socialLink.url"
                    target="_blank"
                    class="social-link bg-primary"
                    width="43"
                    height="43"
                    rounded="lg"
                  />
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer />
        <v-col cols="7">
          <v-row>
            <v-col>
              <span class="footer-nav__item-title d-block mb-4 text-md-20 text-white position-relative font-weight-medium pb-2">Useful Links</span>
              <v-list class="footer-nav pa-0 text-white" bg-color="transparent">
                <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    class="justify-start pa-0"
                    :style="{'min-height': navLinkHeight}"
                >
                  <v-btn
                    :to="item.path"
                    router
                    :flat="false"
                    :ripple="false"
                    variant="text"
                    block
                    class="footer-nav__link px-0 text-grey text-capitalize text-md-18 font-weight-regular"
                  >
                    {{ item.title }}
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <div class="mt-10">
            <div class="text-center position-relative copyright-text-block">
              <p class="d-inline-block px-4 bg-secondary">
                Copyright © 2023. All rights reserved. Powered by <a href="https://isulyma.netlify.app/" target="_blank">Ioann Sulyma</a>
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
  .footer {
    &__desc {
      line-height: 26px;
    }
    .v-btn {
      &:deep(.v-btn__overlay) {
        background: transparent;
      }
      &:hover {
        color: $color-primary!important;
      }
      &--active {
        color: #fff!important;
      }
    }
    .social-links {
      &__item {
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
    .social-link {
      &:hover {
        background: $bg-color-tertiary!important;
      }
    }

    .copyright-text {
      &-block {
        z-index: 1;
        &:before, &:after {
          content: '';
          position: absolute;
          background: rgba($bg-color-tertiary, 0.2);
          height: 1px;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          z-index: -1;
        }
        &:before {
          left: -50%;
        }
        &:after {
          right: -50%;
        }
      }
    }
  }
  .footer-nav {
    &__item-title {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 1px;
        background-color: #fff;
      }
    }
  }
</style>

<script setup lang="ts">
import useFooter from "@/composables/useFooter";
import LogoIcon from "@/assets/images/logo.svg";
import { MenuItem } from "@/models/MenuItem";

const { navLinkHeight } = useFooter();

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/magistrat4797",
    icon: "mdi-github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/isulyma/",
    icon: "mdi-linkedin",
  },
];

const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
];
</script>
