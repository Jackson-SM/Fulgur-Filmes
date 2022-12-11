import { styled } from '../../config/stitches.config';

export const StyledBoxGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,

  '& span': {
    fontSize: 16,
    color: '$textDark',
  },
});

export const ContainerItems = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 200px))',
  gap: 15,
});
