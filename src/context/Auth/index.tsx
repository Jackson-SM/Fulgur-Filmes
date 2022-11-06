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
    setIsLoading(true);
    try {
      const { data } = await Api.post('/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', data.token);
      Api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setIsLogged(true);
    } catch (err: any) {
      setIsError({
        status: err.response.status,
        message: 'Credencias inválidas',
      });
    }

    setIsLoading(false);
  };

  const logout = async () => {
    const token = localStorage.getItem('token');
    Api.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await Api.post('auth/logout');
    if (data.revoke) {
      Api.defaults.headers.Authorization = null;
      localStorage.removeItem('token');
      setIsLogged(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      setIsLogged(true);
    }
  }, []);

  return <AuthContext.Provider value={{ isLoading, isLogged, login, logout }}>{children}</AuthContext.Provider>;
}
