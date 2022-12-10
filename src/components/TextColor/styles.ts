import { styled } from '../../config/stitches.config';

export const StyledTextColor = styled('h1', {
  color: '$text',

  '& strong': {
    color: '$primary',
  },

  defaultVariants: {
    size: 'medium_x',
  },

  variants: {
    size: {
      small_x: {
        fontSize: '12px',
      },
      small: {
        fontSize: '14px',
      },
      medium_x: {
        fontSize: '16px',
      },
      medium: {
        fontSize: '18px',
      },
      large_x: {
        fontSize: '25px',
      },
      large: {
        fontSize: '35px',
      },
    },
  },
});
