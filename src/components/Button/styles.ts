import { CircularProgress } from '@mui/material';
import { whiteA } from '@radix-ui/colors';
import { lighten } from 'polished';

import { handleTheme, styled } from '../../config/stitches.config';

export const StyledButton = styled('button', {
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

  position: 'relative',

  '& svg': {
    width: '17px',
    height: '17px',

    marginLeft: '20px',
  },

  defaultVariants: {
    color: 'primary',
    size: 'small',
  },

  '&[disabled]': {
    background: `${whiteA.whiteA6}`,
    '&:hover': {
      background: `${whiteA.whiteA6}`,
    },
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
        width: '100px',
        height: '40px',
      },
      medium: {
        width: '200px',
        height: '90px',
      },
      large: {
        width: '400px',
        height: '190px',
      },
    },
  },
});

export const CircularProgressButton = styled(CircularProgress, {
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  '& svg': {
    positon: 'absolute',
    margin: 0,
    padding: 0,
  },
});
