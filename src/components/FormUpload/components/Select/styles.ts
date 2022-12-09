import { styled } from '../../../../config/stitches.config';

export const StyledSelectUpload = styled('select', {
  padding: 9,
  fontSize: '15px',
  fontFamily: 'Questrial',

  background: 'transparent',

  color: '$text',

  outline: 'none',
});

export const StyledOptionSelect = styled('option', {
  background: '$background',

  color: '$text',

  padding: 10,
});
