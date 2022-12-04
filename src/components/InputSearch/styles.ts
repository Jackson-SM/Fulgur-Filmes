import { styled } from '../../config/stitches.config';

export const StyledInputSearch = styled('input', {
  border: '1px solid $secundary',
  padding: '10px',

  width: '400px',

  outline: 'none',

  borderRadius: 3,
  fontSize: '14px',

  background: 'transparent',

  color: '$text',

  fontFamily: 'Questrial',

  paddingRight: '50px',
});

export const InputFieldSearch = styled('div', {
  display: 'flex',
  position: 'relative',

  '& button': {
    height: '100%',
    position: 'absolute',
    right: '0',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
