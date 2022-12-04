import { styled } from '../../../../config/stitches.config';

export const StyledBanner = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  height: 350,
  borderRadius: 5,
});

export const StyledBannerImg = styled('img', {
  height: '125%',
  width: '100%',
  objectFit: 'cover',
  position: 'absolute',
});
