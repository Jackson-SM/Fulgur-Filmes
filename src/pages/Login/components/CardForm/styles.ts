import wave from '../../../../assets/wave.svg';
import { styled } from '../../../../config/stitches.config';

export const StyledCardForm = styled('div', {
  backgroundImage: `url(${wave})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '10px',

  minWidth: '300px',

  flex: '1.5',

  height: '100%',

  '& .header': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',

    textAlign: 'center',

    padding: '10px',
  },

  '& img': {
    width: '100%',
    height: '100%',
  },
});
