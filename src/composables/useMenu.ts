import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import { MenuItem } from '@/models/MenuItem';

export default function useMenu(menuItems: MenuItem[]) {
  const { mobile } = useDisplay();
  const isMobile = computed(() => mobile.value);

  return { menuItems, isMobile };
}