import { whiteA } from '@radix-ui/colors';
import { lighten } from 'polished';

import { handleTheme, styled } from '../../config/stitches.config';

export const Button = styled('button', {
  textDecoration: 'none',
  color: '$text',
  border: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '3px',

  outline: 'none',

  fontFamily: 'Questrial',

  fontSize: '15px',
  cursor: 'pointer',

  transition: 'all ease 130ms',

  '& svg': {
    width: '17px',
    height: '17px',

    marginLeft: '20px',
  },

  defaultVariants: {
    color: 'primary',
    size: 'small',
  },

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
