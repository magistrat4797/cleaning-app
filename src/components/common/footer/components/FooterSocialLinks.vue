<template>
  <div class="social-links-block d-flex">
    <v-list
      class="d-flex pa-0 overflow-visible social-links"
      bg-color="transparent"
    >
      <v-list-item
        v-for="socialLink in socialLinks"
        :key="socialLink.name"
        class="social-links__item pa-0"
      >
        <v-btn
          :icon="socialLink.icon"
          :title="socialLink.name"
          variant="text"
          :href="socialLink.url"
          target="_blank"
          class="social-link bg-primary"
          rounded="lg"
        />
      </v-list-item>
    </v-list>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.social-links {
  &__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
.social-link {
  width: 40px;
  height: 40px;
  @include sm {
    width: 43px;
    height: 43px;
  }
  &:hover {
    background: $bg-color-tertiary !important;
  }
}
</style>

<script setup lang="ts">
import { SocialLink } from "@/models/SocialLink";

const socialLinks: SocialLink[] = [
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
</script>
