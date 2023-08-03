<template>
  <div class="py-5">
    <p class="footer__text"><slot /></p>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    &__text {
      line-height: 26px;
    }
  }
</style>