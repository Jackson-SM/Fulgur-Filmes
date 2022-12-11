import { styled } from '../../../../config/stitches.config';

export const StyledInputUpload = styled('input', {
  background: 'none',
  outline: 'none',
  border: '1px solid $primary',

  fontSize: '15px',

  padding: '10px',

  fontFamily: 'Questrial',

  color: '$text',

  '&[type="file"]': {
    display: 'none',
  },
});
