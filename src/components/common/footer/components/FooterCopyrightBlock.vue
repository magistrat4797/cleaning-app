<template>
  <div class="footer-copyright-block mt-10">
    <div class="text-center position-relative copyright-text-block">
      <p class="d-inline-block px-4 bg-secondary">
        <slot/>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
    .copyright-text {
      &-block {
        z-index: 1;
        &:before, &:after {
          content: '';
          position: absolute;
          background: rgba($bg-color-tertiary, 0.2);
          height: 1px;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          z-index: -1;
        }
        &:before {
          left: -50%;
        }
        &:after {
          right: -50%;
        }
      }
    }
</style>