import { styled } from '../../../../config/stitches.config';

export const StyledTextArea = styled('textarea', {
  border: '1px solid $primary',

  resize: 'none',

  background: 'none',
  outline: 'none',

  padding: 5,

  color: '$text',
});
