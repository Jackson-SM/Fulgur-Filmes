import { whiteA } from '@radix-ui/colors';

import { styled } from '../../../../config/stitches.config';

export const LinkInput = styled('a', {
  textDecoration: 'none',
  color: '$text',

  fontSize: '14px',
  padding: '5px',
  width: 'max-content',

  borderRadius: '20px',

  transition: 'all ease 100ms',

  '&:hover': {
    background: `${whiteA.whiteA4}`,
  },
});
