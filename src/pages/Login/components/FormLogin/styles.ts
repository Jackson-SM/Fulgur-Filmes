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

export const LinkInput = styled('a', {
  textDecoration: 'none',
  color: '$text',

  fontSize: '14px',
  padding: '5px',
  width: 'max-content',

  borderRadius: '20px',

  transition: 'all ease 100ms',

  '&:hover': {
    background: `${whiteA.whiteA4}`,
  },
});
