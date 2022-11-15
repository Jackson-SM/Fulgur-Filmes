import { styled } from '../../config/stitches.config';

export const LogoContainer = styled('div', {
  display: 'flex',
  gap: '5px',
  alignItems: 'center',

  defaultsVariants: {
    styled: 'line',
  },

  variants: {
    styled: {
      line: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      invertLine: {
        flexDirection: 'row-reverse',
      },
      invertColumn: {
        flexDirection: 'column-reverse',
      },
    },
  },
});
export const TextLogo = styled('h1', {
  fontSize: '25px',
  fontFamily: 'Comfortaa',

  '& strong': {
    color: '$primary',
  },
});
export const ImgLogo = styled('img', {
  variants: {
    sizes: {
      sm: {
        width: '25px',
        height: '25px',
      },
      md: {
        width: '50px',
        height: '50px',
      },
      lg: {
        width: '100px',
        height: '100px',
      },
    },
  },
});
