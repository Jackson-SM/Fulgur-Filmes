import { Switch } from '@mui/material';

import { styled } from '../../../../config/stitches.config';

export const ContainerOptions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const StyledSwitch = styled(Switch, {
  color: '$primaryLight',
});
