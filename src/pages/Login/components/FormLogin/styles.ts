import { whiteA } from '@radix-ui/colors';

import { styled } from '../../../../config/stitches.config';

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  flex: '1',

  padding: '20px',

  gap: '20px',

  '& .top_form': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',

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

export const InputField = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  gap: '8px',

  paddingBottom: '10px',
});

export const Label = styled('label', {});
