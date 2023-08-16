<template>
  <div class="footer-nav">
    <v-row no-gutters class="mx-n2">
      <v-col
        :cols="getColSpan(index)"
        :sm="getColSize()"
        v-for="(navItem, index) in links"
        :key="index"
        class="px-2 mb-4 mb-md-0"
      >
        <div class="text-center text-sm-left mb-3 mb-sm-4">
          <span
            class="footer-nav__item-title d-inline-block text-sm-18 text-md-20 text-white position-relative font-weight-medium pb-1 pb-sm-2"
            >{{ navItem.title }}</span
          >
        </div>
        <v-list class="footer-nav pa-0 text-white" bg-color="transparent">
          <v-list-item
            v-for="(link, index2) in navItem.links"
            :key="index2"
            class="d-flex justify-center justify-sm-start pa-0"
            :style="{ 'min-height': navLinkHeight }"
          >
            <v-btn
              v-if="link.isExternal"
              router
              :flat="false"
              :ripple="false"
              variant="text"
              block
              class="footer-nav__link h-auto px-0 text-grey text-none text-13 text-sm-16 font-weight-regular"
              :href="link.path"
              :target="link.target"
            >
              {{ link.title }}
            </v-btn>
            <v-btn
              v-else
              :to="link.path"
              router
              :flat="false"
              :ripple="false"
              variant="text"
              block
              class="footer-nav__link h-auto px-0 text-grey text-none text-13 text-sm-16 font-weight-regular"
              :target="link.target"
            >
              {{ link.title }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { NavItemGroup } from "@/models/NavModels";

const props = defineProps({
  links: { type: Array as () => NavItemGroup[], required: true },
  navLinkHeight: { type: String, default: null },
});

const getColSize = () => 12 / props.links.length;

const getColSpan = (index: number): string =>
  index + 1 === props.links.length && props.links.length % 2 !== 0 ? "12" : "6";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

.footer-nav {
  &__item-title {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 60px;
      height: 1px;
      background-color: #fff;
      @include xs {
        left: 50%;
        transform: translateX(-50%);
        width: 45px;
      }
    }
  }
  .v-btn {
    &:deep(.v-btn__overlay) {
      background: transparent;
    }
    &:deep(.v-btn__content) {
      white-space: normal;
    }
    &:hover {
      color: $color-primary !important;
    }
    &--active {
      color: #fff !important;
    }
  }
}
</style>
