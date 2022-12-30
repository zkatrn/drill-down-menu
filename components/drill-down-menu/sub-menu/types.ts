import { MenuItemType } from '../types';

export type SubMenuProps = {
  goBack?: () => void;
  depthLevel: number;
  menuItems: Array<MenuItemType>;
  setLeft?: (amount: string) => void;
  title?: string;
};
