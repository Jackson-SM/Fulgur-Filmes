import { whiteA } from '@radix-ui/colors';
import { lighten } from 'polished';

import { handleTheme, styled } from '../../config/stitches.config';

export const Button = styled('button', {
  textDecoration: 'none',
  color: '$text',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '3px',

  defaultVariants: {
    color: 'tertiary',
    size: 'small',
  },

  transition: 'all ease 130ms',

  variants: {
    color: {
      default: {
        background: `${whiteA.whiteA6}`,

        '&:hover': {
          background: `${whiteA.whiteA8}`,
        },
      },
      primary: {
        background: `$primary`,

        '&:hover': {
          background: `${lighten(0.05, handleTheme.primary)}`,
        },
      },
      secundary: {
        background: `$secundary`,

        '&:hover': {
          background: `${lighten(0.05, handleTheme.secundary)}`,
        },
      },
      tertiary: {
        background: `$tertiary`,

        '&:hover': {
          background: `${lighten(0.05, handleTheme.tertiary)}`,
        },
      },
    },
    size: {
      small: {
        padding: '10px',
      },
      medium: {
        padding: '20px',
      },
      large: {
        padding: '40px',
      },
    },
  },
});
