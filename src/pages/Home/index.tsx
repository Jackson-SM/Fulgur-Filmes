import React, { useEffect } from 'react';

import { Api } from '../../api/api';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

export function Home() {
  const { logout } = useAuth();

  useEffect(() => {
    console.log(Api.defaults.headers.Authorization);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={(e) => logout()}>Logout</Button>
    </div>
  );
}
