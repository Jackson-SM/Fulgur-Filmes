import { styled } from '../../config/stitches.config';

export const StyledInput = styled('input', {
  background: 'none',
  outline: 'none',
  border: '1px solid $text',
  padding: '10px',
  borderRadius: '3px',

  width: '100%',

  fontSize: '15px',

  color: '$text',
  fontFamily: 'Questrial',

  '&:focus': {
    borderColor: '$primary',
  },
});
