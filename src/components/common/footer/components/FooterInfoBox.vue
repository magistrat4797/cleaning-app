<template>
  <div class="footer-info">
    <v-row no-gutters>
      <v-col>
        <logo-block
          class="justify-center justify-md-start"
          color="white"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <footer-text-block>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </footer-text-block>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import FooterTextBlock from "@/components/common/footer/components/FooterTextBlock.vue";
import LogoBlock from "@/components/logo/LogoBlock.vue";
</script>
