import { styled } from '../../../../config/stitches.config';

export const StyledTextArea = styled('textarea', {
  border: '2px solid transparent',
  borderRadius: 5,

  resize: 'none',
  outline: 'none',

  fontSize: '16px',

  background: '$background',
  padding: 13,

  color: '$text',

  transition: 'all ease 130ms',

  '&:hover': {},

  '&:focus': {
    borderColor: '$primary',
  },
});
