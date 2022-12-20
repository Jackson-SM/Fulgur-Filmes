import { styled } from '../../../../config/stitches.config';

export const ContainerVideo = styled('div', {
  backgroundSize: 'cover',
  height: '100%',
});

export const ContainerInfoVideo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',

  maxWidth: '600px',

  gap: 25,

  padding: 40,
});

export const ImplementsInformation = styled('div', {
  display: 'flex',

  gap: 20,
});

export const ImplementInfo = styled('span', {
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  gap: 5,

  '& svg': {
    color: '$primary',
    width: 20,
    height: 20,
  },
});

export const TitleVideo = styled('h1', {
  fontSize: '50px',
});

export const DescriptionVideo = styled('p', {
  margin: 0,
  padding: 0,

  color: '$textDark',

  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',

  backgroundImage: 'linear-gradient(to bottom,$text 80%,transparent)',
});

export const ButtonWatchVideo = styled('button', {});
