import { computed } from "vue";
import { useDisplay } from "vuetify";

export default function useFooter() {
  const { name } = useDisplay();

  const navLinkHeight = computed(() => {
    switch (name.value) {
      case "lg":
      case "xl":
        return "40px";
      default:
        return "35px";
    }
  });
  return { navLinkHeight };
}
