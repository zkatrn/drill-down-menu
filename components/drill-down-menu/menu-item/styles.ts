import { styled } from '../../../stitches.config';

export const StyledMenuItem = styled('li', {
  alignItems: 'center',
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  height: '60px',
  transition: 'all 0.15s linear',

  '&:hover': {
    backgroundColor: '#333',
  },
});

export const StyledSubMenuIcon = styled('span', {
  marginLeft: 'auto',
});

export const StyledMenuItemTitle = styled('a', {
  alignItems: 'center',
  color: '$primaryForegroundColor',
  cursor: 'pointer',
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '0 15px',
  textDecoration: 'none',
});
