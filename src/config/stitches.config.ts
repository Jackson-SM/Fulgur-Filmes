import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      primary: '#715aff',
      secundary: '#ff4c52',
      tertiary: '#38e4ae',

      background: '#131313',
      text: '#fdfffc',
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});
