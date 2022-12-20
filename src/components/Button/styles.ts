import { CircularProgress } from '@mui/material';
import { whiteA } from '@radix-ui/colors';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

import { handleTheme, styled } from '../../config/stitches.config';

const ButtonCSS = {
  textDecoration: 'none',
  color: 'white',
  border: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  outline: 'none',

  fontFamily: 'Questrial',

  fontSize: '15px',
  cursor: 'pointer',

  transition: 'all ease 130ms',

  position: 'relative',

  background: 'none',

  padding: '10px',

  '& svg': {
    width: '18px',
    height: '18px',
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
        border: '1px solid $background',
        color: '$text',

        '&:hover': {
          background: '$text',
          color: '$background',
        },
      },
      primary: {
        border: '1px solid',
        borderColor: '$primary',
        color: '$text',

        '&:hover': {
          background: '$primary',
          color: 'white',
        },
      },
      secondary: {
        border: '1px solid',
        borderColor: '$secundary',
        color: '$text',

        '&:hover': {
          background: '$secundary',
          color: 'white',
        },
      },
      tertiary: {
        border: '1px solid',
        borderColor: '$tertiary',
        color: '$text',

        '&:hover': {
          background: '$tertiary',
          color: 'white',
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
      default: {
        width: 'auto',
        height: 'auto',
      },
      small: {
        width: '80px',
        height: '30px',
      },
      medium: {
        width: '100px',
        height: '40px',
      },
      large: {
        width: '150px',
        height: '50px',
      },
    },

    rounded: {
      true: {
        borderRadius: '3px',
      },
    },
  },
};

export const StyledButton = styled('button', ButtonCSS);

export const StyledButtonLink = styled(Link, ButtonCSS);

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
