import { createStitches } from '@stitches/react';

import { dark } from '../styled/themes/dark';

export const handleTheme = dark.colors;

export const { styled, css, globalCss, theme, createTheme, keyframes } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(248, 100%, 68%)',
      primaryLight: 'hsl(248, 100%, 74%)',

      secundary: 'hsl(358, 100%, 65%)',
      secundaryLight: 'hsl(358, 100%, 72%)',

      tertiary: 'hsl(203, 83%, 72%)',
      tertiaryLight: 'hsl(203, 83%, 79%)',

      background: 'hsl(0, 0%, 5%)',
      backgroundLight: 'hsl(0, 0%, 10%)',

      text: 'hsl(0, 0%, 95%)',
      textDark: 'hsl(0, 0%, 90%)',
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      background: `linear-gradient(${value})`,
    }),
  },
});
