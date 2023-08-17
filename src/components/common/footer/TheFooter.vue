<template>
  <v-footer class="footer px-0 py-6 py-md-10 bg-secondary">
    <v-container class="py-0">
      <v-row align="center" no-gutters>
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <footer-info-box />
          <footer-social-links class="justify-center justify-md-start" />
        </v-col>
        <v-spacer />
        <v-col cols="12" md="7">
          <footer-nav :links="links" :navLinkHeight="navLinkHeight" />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <footer-copyright-block>
            Copyright © 2023. All rights reserved. Powered by
            <a href="https://isulyma.netlify.app/" target="_blank"
              >Ioann Sulyma</a
            >
          </footer-copyright-block>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import FooterInfoBox from "@/components/common/footer/components/FooterInfoBox.vue";
import FooterNav from "@/components/common/footer/components/FooterNav.vue";
import FooterCopyrightBlock from "@/components/common/footer/components/FooterCopyrightBlock.vue";
import FooterSocialLinks from "@/components/common/footer/components/FooterSocialLinks.vue";
import useFooter from "@/components/common/footer/composables/useFooter";

const { navLinkHeight } = useFooter();

const links = [
  {
    title: "Services",
    links: [
      { title: "House Cleaning", path: "/services/house-cleaning" },
      { title: "Office Cleaning", path: "/services/office-cleaning" },
      { title: "Window Cleaning", path: "/services/window-cleaning" },
      { title: "Floor Cleaning", path: "/services/floor-cleaning" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { title: "Home", path: "/" },
      { title: "About Us", path: "/about" },
      { title: "Services", path: "/services" },
      { title: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "(+12) 345 678 912",
        path: "tel:(+12) 345 678 912",
        isExternal: true,
      },
      {
        title: "info@email.com",
        path: "mailto:info@email.com",
        isExternal: true,
      },
      {
        title: "82 Victoria St, London",
        path: "https://goo.gl/maps/VcptuVb9NF8DmMr18",
        isExternal: true,
        target: "_blank",
      },
    ],
  },
];
</script>
