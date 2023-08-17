<template>
  <hero-box/>
  <newsletter-box>
    <template #title> Subscribe To Our News Letter </template>
    <template #text>
      Subscribe our news letter to get latest news and updates
    </template>
  </newsletter-box>
</template>

<script lang="ts" setup>
import HeroBox from "@/components/hero/HeroBox.vue";
import NewsletterBox from "@/components/newsletter/NewsletterBox.vue";
</script>
