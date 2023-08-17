import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default function useHeaderHeight() {
  const el = ref<HTMLElement | null>(null);

  const updateHeight = () => {
    el.value = document.querySelector("#header");
    if (el.value) {
      height.value = el.value.clientHeight;
    }
  };

  const height = ref(0);
  const headerHeight = computed(() => height.value);

  onMounted(() => {
    updateHeight();
    window.addEventListener("resize", () => {
      setTimeout(updateHeight, 300);
    });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateHeight);
  });

  return { headerHeight };
}