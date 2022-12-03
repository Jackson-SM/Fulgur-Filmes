import { createTheme } from '../../config/stitches.config';

export const lightTheme = createTheme({
  colors: {
    primary: 'hsl(248, 100%, 68%)',
    primaryLight: 'hsl(248, 100%, 74%)',

    secundary: 'hsl(358, 100%, 65%)',
    secundaryLight: 'hsl(358, 100%, 72%)',

    tertiary: 'hsl(203, 83%, 72%)',
    tertiaryLight: 'hsl(203, 83%, 79%)',

    background: ' hsl(0, 0%, 95%)',
    backgroundLight: 'hsl(0, 0%,80%)',

    text: 'hsl(0, 0%, 20%)',
    textDark: 'hsl(0, 0%,10%)',
  },
});
