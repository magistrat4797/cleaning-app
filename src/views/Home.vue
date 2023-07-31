<template>
  <div style="min-height: 100vh">Homepage</div>
  <newsletter-box>
    <template #title> Subscribe To Our News Letter </template>
    <template #text>
      Subscribe our news letter to get latest news and updates
    </template>
  </newsletter-box>
</template>

<script lang="ts" setup>
import NewsletterBox from "@/components/NewsletterBox.vue";
</script>
