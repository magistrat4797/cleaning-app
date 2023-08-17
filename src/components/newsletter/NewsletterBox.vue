<template>
  <div class="newsletter-box py-6 py-md-8">
    <v-container class="py-0">
      <div class="newsletter bg-primary pa-4 py-md-6 px-md-8 px-lg-12 rounded-lg">
        <v-row align="center" no-gutters>
          <v-col class="pa-0" cols="12" md="6">
            <div v-if="slots.title" class="text-center text-md-left">
              <h3 class="newsletter__title mb-2 mb-md-0 text-28 text-sm-28 text-lg-32 font-weight-bold">
                <slot name="title" />
              </h3>
              <p class="newsletter__text text-17 text-md-18">
                <slot name="text" />
              </p>
            </div>
          </v-col>
          <v-col class="pt-4 pt-md-0 pl-md-6" cols="12" md="6">
            <form>
              <v-text-field
                variant="solo"
                label="Enter Your Email"
                class="bg-transparent"
                type="email"
                hide-details
              />
            </form>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

.newsletter {
  margin: 0 auto;
  max-width: 515px;
  @include md {
    max-width: none;
  }
  &__title {
    line-height: 1.3;
  }
}
</style>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>
