import React from 'react';

import { Avatar } from '../../../../components/Avatar';
import { Button } from '../../../../components/Button';
import { useAuth } from '../../../../hooks/useAuth';
import { useTheme } from '../../../../hooks/useTheme';
import { ContainerOptionsUser, StyledSwitch } from './styles';

export function OptionsUser() {
  const { logout } = useAuth();

  const { theme, changeTheme } = useTheme();

  return (
    <ContainerOptionsUser>
      <StyledSwitch color="secondary" checked={theme === 'dark'} onClick={changeTheme} />
      <Avatar dropdown />
    </ContainerOptionsUser>
  );
}
