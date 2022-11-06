import { darken } from 'polished';

import { handleTheme, styled } from '../../config/stitches.config';

export const StyledInput = styled('input', {
  background: 'none',
  outline: 'none',
  border: `1px solid ${darken(0.4, handleTheme.text)}`,
  padding: '10px',
  borderRadius: '3px',

  transition: 'border ease 100ms',

  width: '100%',

  fontSize: '15px',

  color: `white`,
  fontFamily: 'Questrial',

  '&:focus': {
    borderColor: '$primary',
  },

  variants: {
    type: {
      circle: {
        borderRadius: '60px',
      },
    },
  },
});
