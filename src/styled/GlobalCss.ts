import { globalCss } from '../config/stitches.config';

export const GlobalCss = globalCss({
  '@import': [
    'https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap',
    'https://fonts.googleapis.com/css2?family=Questrial&display=swap',
  ],

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$background',
    color: '$text',
    fontFamily: 'Questrial',
  },
});
