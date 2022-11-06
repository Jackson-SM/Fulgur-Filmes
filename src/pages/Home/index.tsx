import React, { useEffect } from 'react';

import { Api } from '../../api/api';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { darkTheme } from '../../styled/stitches-theme/darkTheme';
import { lightTheme } from '../../styled/stitches-theme/lightTheme';

export function Home() {
  const { logout } = useAuth();

  useEffect(() => {
    console.log(Api.defaults.headers.Authorization);
  }, []);

  const { theme, changeTheme } = useTheme();

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={(e) => logout()}>Logout</Button>
      <Button onClick={changeTheme}>Change Theme</Button>
    </div>
  );
}
