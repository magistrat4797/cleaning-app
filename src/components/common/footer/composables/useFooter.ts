import { computed } from "vue";
import { useDisplay } from "vuetify";

export default function useFooter() {
  const { name } = useDisplay();

  const navLinkHeight = computed(() => {
    switch (name.value) {
      default:
        return "30px";
      case "sm":
        return "35px";
      case "md":
      case "lg":
      case "xl":
        return "40px";
    }
  });
  return { navLinkHeight };
}
