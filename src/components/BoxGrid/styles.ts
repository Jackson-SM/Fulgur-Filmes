import { styled } from '../../config/stitches.config';

export const StyledBoxGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: 15,
});
