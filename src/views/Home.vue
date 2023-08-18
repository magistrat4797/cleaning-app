<template>
  <hero-box>
    <template #subtitle>Highly Professional Cleaning</template>
    <template #title><span class="text-primary">Easy To Clean</span> House And Office</template>
    <template #text>
      Amet minim mollit non deserunt ullamco  sit aliqua dolor do amet sint. Velit officia enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </template>
  </hero-box>
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
