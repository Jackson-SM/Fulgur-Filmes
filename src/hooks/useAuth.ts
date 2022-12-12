import { useContext } from 'react';

import { AuthContext } from '../context/Auth';

export const useAuth = () => {
  const { isLoading, isLogged, login, logout, register, user } = useContext(AuthContext);

  return {
    isLoading,
    isLogged,
    login,
    logout,
    register,
    user,
  };
};
