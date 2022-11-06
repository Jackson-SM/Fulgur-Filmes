import { useContext } from 'react';

import { AuthContext } from '../context/Auth';

export const useAuth = () => {
  const { isLoading, isLogged, login, logout } = useContext(AuthContext);

  return {
    isLoading,
    isLogged,
    login,
    logout,
  };
};
