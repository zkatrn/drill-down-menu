import { styled } from '../../stitches.config';

export const StyledMenu = styled('ul', {
  position: 'absolute',
  top: 0,
  left: 0,
});

export const StyledDrillDownMenu = styled('div', {
  backgroundColor: '$primaryBackgroundColor',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  minHeight: '450px',
  overflow: 'hidden',
  position: 'relative',
  width: '$$width',

  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    transition: 'left 0.33s ease',
    width: '$$width',
  },
});
