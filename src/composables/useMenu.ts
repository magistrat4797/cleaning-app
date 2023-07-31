import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { MenuItem } from "@/models/MenuItem";
import useScroll from "@/composables/useScroll";

export default function useMenu(menuItems: MenuItem[]) {
  const { isScrolled } = useScroll();
  const { mobile } = useDisplay();
  const isMobile = computed(() => mobile.value);

  const sidebar = ref(false);
  const toggleSidebar = () => (sidebar.value = !sidebar.value);

  const isDefault = computed(
    () =>
      isScrolled.value ||
      (isMobile.value && !isScrolled.value && sidebar.value),
  );
  const density = computed(() =>
    isMobile.value || isDefault.value ? "default" : "prominent",
  );

  const navColor = computed(() =>
    isDefault.value ? "bg-secondary" : "bg-transparent",
  );

  const textColor = computed(() =>
    isDefault.value ? "text-white" : "text-black",
  );

  return {
    menuItems,
    isMobile,
    density,
    navColor,
    textColor,
    sidebar,
    toggleSidebar,
  };
}
