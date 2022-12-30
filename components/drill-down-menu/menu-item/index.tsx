import React, { useEffect, useState } from 'react';
import { MenuItemProps } from './types';
import {
  StyledMenuItem,
  StyledSubMenuIcon,
  StyledMenuItemTitle,
} from './styles';
import SubMenu from '../sub-menu';

const MenuItem = ({ depthLevel, goBack, item, setLeft }: MenuItemProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
    setLeft && setLeft(`calc(${depthLevel + 1} * -100%)`);
  };

  useEffect(() => {
    if (item.defaultOpen) {
      item.defaultOpen = false;
      handleOpenMenu();
    }
  }, []);

  return (
    <StyledMenuItem onClick={() => goBack && goBack()}>
      <StyledMenuItemTitle
        href={item.url}
        onClick={(e) => {
          if (!item.url) {
            e.preventDefault();
            handleOpenMenu();
          }
        }}
      >
        {item.icon} {item.title}
        {item.submenu?.length && <StyledSubMenuIcon>▶</StyledSubMenuIcon>}
      </StyledMenuItemTitle>
      {showMenu && item.submenu?.length && (
        <SubMenu
          depthLevel={depthLevel}
          goBack={() => setShowMenu(false)}
          menuItems={item.submenu}
          setLeft={setLeft}
          title={`${item.icon || ''} ${item.title}`}
        />
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
