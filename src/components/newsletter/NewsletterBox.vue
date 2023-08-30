<template>
  <section class="newsletter-box py-6 py-md-8">
    <v-container class="py-0">
      <div
        class="newsletter bg-primary pa-4 py-md-6 px-md-8 px-lg-12 rounded-lg"
      >
        <v-row align="center" no-gutters>
          <v-col class="pa-0" cols="12" md="6">
            <div v-if="slots.title" class="text-center text-md-left">
              <h3
                class="newsletter__title mb-2 mb-md-0 text-28 text-sm-28 text-lg-32 font-weight-bold"
              >
                <slot name="title" />
              </h3>
              <p class="newsletter__text text-17 text-md-18">
                <slot name="text" />
              </p>
            </div>
          </v-col>
          <v-col class="pt-4 pt-md-0 pl-md-6" cols="12" md="6">
            <form>
              <div class="d-flex position-relative">
                <v-text-field
                  variant="solo"
                  label="Enter Your Email"
                  class="bg-transparent newsletter__input"
                  type="email"
                  required
                  hide-details
                />
                <button
                  type="submit"
                  class="newsletter__btn bg-white text-primary rounded"
                >
                  <font-awesome-icon icon="fa-solid fa-paper-plane" />
                </button>
              </div>
            </form>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

$box-width: 515px;

$btn-width: 46px;
$btn-width-md: 56px;

.newsletter {
  margin: 0 auto;
  max-width: $box-width;
  @include md {
    max-width: none;
  }
  &__title {
    line-height: 1.3;
  }
  &__input {
    &:deep(.v-field__input) {
      padding-right: $btn-width;
    }
    & + .newsletter__btn {
      width: $btn-width;
    }
    @include md {
      &:deep(.v-field__input) {
        padding-right: $btn-width-md;
      }
      & + .newsletter__btn {
        width: $btn-width-md;
      }
    }
  }
  &__btn {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    &:hover,
    &:active {
      color: $color-secondary !important;
    }
  }
}
</style>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>
