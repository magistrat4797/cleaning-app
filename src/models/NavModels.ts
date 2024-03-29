export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  target?: string;
  isExternal?: boolean;
}

export interface NavItemGroup {
  title: string;
  links: NavItem[];
}
