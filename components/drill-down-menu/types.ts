export type MenuItemType = {
  defaultOpen?: boolean;
  icon?: string;
  submenu?: Array<MenuItemType>;
  title?: string;
  url?: string;
};

export type DrillDownMenuProps = {
  width?: string;
  items?: Array<MenuItemType>;
};
