import { createStitches } from '@stitches/react';

import { dark } from '../styled/themes/dark';

export const handleTheme = dark.colors;

export const { styled, css, globalCss, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(248, 100%, 68%)',
      primaryLight: 'hsl(248, 100%, 74%)',

      secundary: 'hsl(358, 100%, 65%)',
      secundaryLight: 'hsl(358, 100%, 72%)',

      tertiary: 'hsl(203, 83%, 72%)',
      tertiaryLight: 'hsl(203, 83%, 79%)',

      background: 'hsl(0, 0%, 7%)',
      backgroundLight: 'hsl(0, 0%, 20%)',

      text: 'hsl(0, 0%, 95%)',
      textDark: 'hsl(0, 0%, 60%)',
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundGradient: `linear-gradient(${value})`,
    }),
  },
});
