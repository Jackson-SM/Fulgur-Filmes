import { styled } from '../../config/stitches.config';

export const StyledInput = styled('input', {
  background: '$background',
  outline: 'none',
  border: `2px solid $backgroundLight`,
  padding: '13px',
  borderRadius: '3px',

  transition: 'border ease 200ms',

  width: '100%',

  fontSize: '16px',

  color: `white`,
  fontFamily: 'Questrial',

  '&:focus': {
    borderColor: '$primary',
  },

  variants: {
    border: {
      rounded: {
        borderRadius: 3,
      },
      circle: {
        borderRadius: '60px',
      },
    },
  },
});
