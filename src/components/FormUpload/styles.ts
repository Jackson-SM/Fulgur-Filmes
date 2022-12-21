import { styled } from '../../config/stitches.config';

export const ContainerFormUpload = styled('div', {
  background: '$backgroundLight',
  padding: 10,

  display: 'flex',
  flexDirection: 'column',
  gap: 10,
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

export const ButtonUploadCoverAndBackground = styled('label', {
  background: '$primary',
  color: 'white',

  outline: 'none',
  border: 'none',
  borderRadius: '50%',

  padding: '10px',

  display: 'flex',
  alignItems: 'center',

  transition: 'all ease 130ms',

  cursor: 'pointer',

  position: 'relative',

  '&:hover': {
    background: '$primaryLight',

    '&::before': {
      opacity: 1,
    },
  },

  '& svg': {
    width: 20,
    height: 20,
  },

  '&::before': {
    content: '',

    transition: 'opacity ease 130ms',

    position: 'absolute',

    width: '100px',
    height: '20px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$primaryLight',

    borderRadius: 5,

    top: '25%',
    left: '110%',

    pointerEvents: 'none',

    opacity: 0,

    zIndex: '1',
  },
});
