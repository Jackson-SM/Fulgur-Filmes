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

  background: 'none',

  '& svg': {
    width: '17px',
    height: '17px',

    marginLeft: '20px',
  },

  defaultVariants: {
    size: 'medium',
  },

  '&[disabled]': {
    background: `${whiteA.whiteA6}`,
    '&:hover': {
      background: `${whiteA.whiteA6}`,
    },
  },

  variants: {
    outlined: {
      default: {
        border: '1px solid',
        borderColor: '$text',
        color: '$background',

        '&:hover': {
          background: '$text',
        },
      },
      primary: {
        border: '1px solid',
        borderColor: '$primary',

        '&:hover': {
          background: '$primary',
          color: 'white',
        },
      },
      secondary: {
        border: '1px solid',
        borderColor: '$secundary',

        '&:hover': {
          background: '$secundary',
        },
      },
      tertiary: {
        border: '1px solid',
        borderColor: '$tertiary',

        '&:hover': {
          background: '$tertiary',
        },
      },
    },
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
        width: '80px',
        height: '30px',
      },
      medium: {
        width: '100px',
        height: '40px',
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
