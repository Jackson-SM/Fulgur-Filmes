import { globalCss } from '../config/stitches.config';

export const GlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$background',
    color: '$text',
  },
});
