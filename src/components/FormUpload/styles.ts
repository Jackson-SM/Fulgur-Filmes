import { styled } from '../../config/stitches.config';

export const ContainerFormUpload = styled('div', {
  width: 400,
  height: 'auto',
  background: '$backgroundLight',

  padding: 20,

  borderRadius: 5,
});

export const BoxRowFields = styled('div', {
  display: 'flex',
  gap: 5,

  variants: {
    center: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});

export const StyledFormUpload = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const InputField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

export const LabelInputField = styled('label', {
  color: '$text',
});

export const ContainerContinueOrBack = styled('div', {
  display: 'flex',

  justifyContent: 'space-around',

  gap: 10,

  '& button': {
    width: '100%',
  },
});
