import React from "react";
import { StyledSubMenu } from "./styles";
import { SubMenuProps } from "./types";
import MenuItem from "../menu-item";
import { MenuItemType } from "../types";

const SubMenu = ({
  depthLevel,
  goBack,
  menuItems,
  setLeft,
  title,
}: SubMenuProps) => {
  return (
    <StyledSubMenu>
      <MenuItem
        depthLevel={depthLevel - 1}
        item={{
          title: `◀ ${String(title)}`,
        }}
        goBack={goBack}
        setLeft={setLeft}
      />
      {menuItems.map((item: MenuItemType, index: number) => (
        <MenuItem
          depthLevel={depthLevel + 1}
          key={`${item.title}-${index}-${depthLevel + 1}`}
          item={item}
          setLeft={setLeft}
        />
      ))}
    </StyledSubMenu>
  );
};

export default SubMenu;
