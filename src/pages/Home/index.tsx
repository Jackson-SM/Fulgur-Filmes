import React, { useEffect } from 'react';

import { Api } from '../../api/api';
import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { darkTheme } from '../../styled/stitches-theme/darkTheme';
import { lightTheme } from '../../styled/stitches-theme/lightTheme';
import { HomeContainer } from './styles';

export function Home() {
  const { logout } = useAuth();

  useEffect(() => {
    console.log(Api.defaults.headers.Authorization);
  }, []);

  const { theme, changeTheme } = useTheme();

  return (
    <HomeContainer>
      <Navbar spacing="around" />
      <Button onClick={(e) => logout()}>Logout</Button>
      <Button onClick={changeTheme}>Change Theme</Button>
    </HomeContainer>
  );
}
