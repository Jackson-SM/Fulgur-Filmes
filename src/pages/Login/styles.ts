import { whiteA } from '@radix-ui/colors';

import { styled } from '../../config/stitches.config';

export const LoginContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const Container = styled('div', {
  background: `${whiteA.whiteA3}`,
  width: '800px',
  height: '500px',

  display: 'flex',
});
