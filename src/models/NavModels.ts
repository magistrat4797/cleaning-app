export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  target?: string;
}

export interface NavItemGroup {
  title: string;
  links: NavItem[];
}