<template>
  <div class="py-4 py-sm-5">
    <p class="footer__text text-15 text-sm-16 text-center text-md-left">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.footer {
  &__text {
    line-height: 28px;
    @include xs {
      line-height: 26px;
    }
  }
}
</style>
