<template>
  <hero-box :hasImage="true">
    <template #subtitle>Highly Professional Cleaning</template>
    <template #title
      ><span class="text-primary">Easy To Clean</span><br />House And
      Office</template
    >
    <template #text>
      Amet minim mollit non deserunt ullamco sit aliqua dolor do amet sint.
      Velit officia enim velit mollit. Exercitation veniam consequat sunt
      nostrud amet.
    </template>
    <template #actions>
      <base-link to="/contact" class="mt-6 mt-md-8">Get a Quote</base-link>
    </template>
  </hero-box>
  <partners-box :partners="partners" />
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
import PartnersBox from "@/components/partners/PartnersBox.vue";

import BaseLink from "@/components/base/BaseLink.vue";

import JqueryIcon from "@/assets/images/partners/jquery.svg";
import BridgestoneIcon from "@/assets/images/partners/bridgestone.svg";
import DashIcon from "@/assets/images/partners/dash.svg";
import DunlopIcon from "@/assets/images/partners/dunlop.svg";
import GiantIcon from "@/assets/images/partners/giant.svg";
import DiggIcon from "@/assets/images/partners/digg.svg";

const partners = [
  { name: "jquery", icon: JqueryIcon },
  { name: "bridgestone", icon: BridgestoneIcon },
  { name: "dash", icon: DashIcon },
  { name: "dunlop", icon: DunlopIcon },
  { name: "giant", icon: GiantIcon },
  { name: "digg", icon: DiggIcon },
];
</script>
