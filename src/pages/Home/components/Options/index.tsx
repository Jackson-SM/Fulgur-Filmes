import React from 'react';

import { Button } from '../../../../components/Button';
import { useAuth } from '../../../../hooks/useAuth';
import { useTheme } from '../../../../hooks/useTheme';
import { ContainerOptions, StyledSwitch } from './styles';

export function Options() {
  const { logout } = useAuth();

  const { theme, changeTheme } = useTheme();

  return (
    <ContainerOptions>
      <StyledSwitch color="secondary" checked={theme === 'dark'} onClick={changeTheme} />
      <Button outlined="primary" size="small" onClick={logout}>
        Sair
      </Button>
    </ContainerOptions>
  );
}
