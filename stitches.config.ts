import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      gray400: 'gainsboro',
      gray500: 'lightgray',

      primaryBackgroundColor: '#222',
      primaryForegroundColor: '$white',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});

globalCss({
  body: {
    fontFamily: 'Calibri, san-serif, Arial',
    margin: 0,
  },
})();
