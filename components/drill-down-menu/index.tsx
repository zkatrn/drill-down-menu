import React, { useState } from 'react';
import { StyledDrillDownMenu, StyledMenu } from './styles';
import { DrillDownMenuProps, MenuItemType } from './types';
import MenuItem from './menu-item';

const DrillDownMenu = ({ width = '300px', items }: DrillDownMenuProps) => {
  const [left, setLeft] = useState('0');

  return (
    <StyledDrillDownMenu css={{ $$width: width }}>
      <StyledMenu css={{ left }}>
        {items?.map((item: MenuItemType, index: number) => {
          const depthLevel = 0;
          return (
            <MenuItem
              depthLevel={depthLevel}
              item={item}
              key={`${item.title}-level-0-${index}`}
              setLeft={setLeft}
            />
          );
        })}
      </StyledMenu>
    </StyledDrillDownMenu>
  );
};

export default DrillDownMenu;
