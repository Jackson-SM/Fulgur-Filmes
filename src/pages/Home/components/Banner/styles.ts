import { styled } from '../../../../config/stitches.config';

export const StyledBanner = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  height: 350,
  borderRadius: 5,

  '&::after': {
    content: '',

    position: 'absolute',

    left: '0',
    top: '0',

    width: '100%',
    height: '100%',

    linearGradient: '120deg, rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.85),transparent,transparent',
  },
});

export const StyledBannerImg = styled('img', {
  height: '125%',
  width: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export const ContainerInfo = styled('div', {
  position: 'absolute',

  width: '100%',
  height: '100%',

  zIndex: 2,
});

export const BannerInfo = styled('div', {
  position: 'relative',

  height: '100%',
  width: '100%',

  maxWidth: 400,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: 10,

  padding: 40,
});

export const BannerTitle = styled('h1', {
  fontSize: 50,
  color: '$primaryLight',
});

export const BannerSinopse = styled('span', {
  color: 'rgb(160,160,160)',
});
