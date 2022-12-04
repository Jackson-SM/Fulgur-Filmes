import { styled } from '../../../../config/stitches.config';

export const StyledOptionsFiltered = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  background: '$backgroundLight',

  padding: 10,

  margin: '10px 0 10px 0',

  borderRadius: 3,

  '& button:not(:last-child)': {
    borderRight: '0px',
  },
});

export const StyledOptionsGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
});
