import { blackA, whiteA } from '@radix-ui/colors';

import { styled } from '../../config/stitches.config';

export const StyledNavbar = styled('nav', {
  display: 'flex',
  alignItems: 'center',

  height: '60px',
  defaultVariants: {
    spacing: 'around',
  },

  variants: {
    spacing: {
      start: {
        justifyContent: 'start',
      },
      end: {
        justifyContent: 'end',
      },
      around: {
        justifyContent: 'space-around',
      },
      between: {
        justifyContent: 'space-between',
      },
      center: {
        justifyContent: 'space-center',
      },
    },
  },
});
