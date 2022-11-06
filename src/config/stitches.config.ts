import { createStitches } from '@stitches/react';

import { dark } from '../styled/themes/dark';
import { light } from '../styled/themes/light';

export const handleTheme = dark.colors;

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      ...handleTheme,
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});
