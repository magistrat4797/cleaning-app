import { computed } from "vue";
import { useDisplay } from "vuetify";

export default function useFooter() {
  const { name } = useDisplay();

  const navLinkHeight = computed(() => {
    switch (name.value) {
      case 'md': return '40px';
      case 'lg':
      case 'xl': return '45px';
      default: return '35px';
    }
  });
  return { navLinkHeight };
}
