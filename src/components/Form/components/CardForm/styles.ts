import { styled } from '../../../../config/stitches.config';

export const StyledCardForm = styled('div', {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '10px',

  minWidth: '300px',

  flex: '1.4',

  height: '100%',

  '& .illustration': {
    width: '300px',
    height: '300px',

    '& img': {
      width: '300px',
      height: '300px',
    },
  },

  '& .header': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',

    textAlign: 'center',

    padding: '10px',
  },

  '& .footer': {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'center',
  },
});
