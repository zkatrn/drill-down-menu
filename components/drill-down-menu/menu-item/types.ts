import { MenuItemType } from '../types';

export type MenuItemProps = {
  depthLevel: number;
  goBack?: () => void;
  item: MenuItemType;
  setLeft?: (amount: string) => void;
};
