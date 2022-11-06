import { createStitches } from '@stitches/react';

import { dark } from '../styled/themes/dark';

export const handleTheme = dark.colors;

export const { styled, css, globalCss, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: '#715aff',
      secundary: '#ff4c52',
      tertiary: '#7CC5F3',

      background: '#131313',
      text: '#f3f3f3',
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});
