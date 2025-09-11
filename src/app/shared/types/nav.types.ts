export interface NavItem {
  title: string;
  icon?: string;
  route?: string;
  badge?: string;
  children?: NavItem[];
}

export interface NavGroup {
  groupTitle?: string;
  items: NavItem[];
}
