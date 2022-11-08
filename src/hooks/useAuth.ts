import { useContext } from 'react';

import { AuthContext } from '../context/Auth';

export const useAuth = () => {
  const { isLoading, isLogged, login, logout, register, userVerifyAndReturned } = useContext(AuthContext);

  return {
    isLoading,
    isLogged,
    login,
    logout,
    userVerifyAndReturned,
    register,
  };
};
