import { styled } from '../../../../config/stitches.config';

export const StyledBanner = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  height: 350,
  width: '100%',
  borderRadius: 5,
});

export const StyledBannerImg = styled('img', {
  width: '100%',
  height: '150%',
  objectFit: 'cover',
  position: 'absolute',
});
