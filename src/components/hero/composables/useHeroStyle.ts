import { computed, Ref } from 'vue';

export default function useHeroStyle(headerHeight: Ref<number>) {
  const topSpacing = computed(() => ({
    marginTop: `-${headerHeight.value}px`,
    paddingTop: `${headerHeight.value}px`,
  }));

  return { topSpacing };
}