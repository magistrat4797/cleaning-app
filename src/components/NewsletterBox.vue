<template>
  <div class="newsletter-box py-8">
    <v-container class="py-0">
      <div class="bg-primary py-6 px-12 rounded-lg">
        <v-row align="center" no-gutters>
          <v-col class="pa-0" cols="6">
            <div v-if="slots.title">
              <h3 class="newsletter__title font-weight-bold">
                <slot name="title" />
              </h3>
              <p class="newsletter__text">
                <slot name="text" />
              </p>
            </div>
          </v-col>
          <v-spacer />
          <v-col class="pa-0" cols="5">
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
.newsletter {
  &__title {
    font-size: 32px;
    line-height: 1.3;
  }
  &__text {
    font-size: 18px;
  }
}
</style>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>
