import { styled } from '../../../../config/stitches.config';

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  flex: '1',

  padding: '20px',

  '& .top_form': {
    display: 'flex',
    flexDirection: 'column',

    padding: '30px 0 30px 0',
    gap: 5,

    '& span': {
      fontSize: '30px',
      fontFamily: 'Rubik',
    },

    '& img': {
      width: '70px',
      height: '70px',
    },
  },
});
