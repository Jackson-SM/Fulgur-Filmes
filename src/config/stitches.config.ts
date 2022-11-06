import { createStitches } from '@stitches/react';

import { useTheme } from '../hooks/useTheme';
import { dark } from '../styled/themes/dark';

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
