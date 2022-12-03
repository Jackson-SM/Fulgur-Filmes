import { styled } from '../../../../config/stitches.config';

export const StyledCardMovie = styled('div', {
  background: 'red',
  margin: '0 auto',

  borderRadius: 5,

  overflow: 'hidden',

  '&:hover': {
    '& img': {
      transform: 'scale(1.1)',
    },
  },
});

export const StyledImgCard = styled('img', {
  transition: 'transform ease 200ms',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
