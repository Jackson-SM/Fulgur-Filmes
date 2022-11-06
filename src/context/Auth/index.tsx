import React, { useEffect, useMemo, useState } from 'react';

import { Api } from '../../api/api';

type AuthContextProps = {
  isLoading: boolean;
  isLogged: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = React.createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: React.ReactNode;
};

type isErrorProps = {
  status: number;
  message: string;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isError, setIsError] = useState<isErrorProps | boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await Api.post('/auth/login', {
        email,
        password,
      });
    } catch (err: any) {
      setIsError({
        status: err.response.status,
        message: 'Credencias inválidas',
      });
    }
  };

  const logout = async () => {
    console.log('logout');
  };

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  return <AuthContext.Provider value={{ isLoading, isLogged, login, logout }}>{children}</AuthContext.Provider>;
}
