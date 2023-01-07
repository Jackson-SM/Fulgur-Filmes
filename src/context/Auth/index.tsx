import React, { useCallback, useEffect, useState } from 'react';

import { Api } from '../../api/api';
import { IUser } from '../../repositories/IUser';

type AuthContextProps = {
  isLoading: boolean;
  isLogged: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, name: string, password: string) => void;
  user: IUser | undefined;
};

export const AuthContext = React.createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: React.ReactNode;
};

export interface ITokenAxiosResponse {
  type: string;
  token: string;
  expires_at: Date;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | undefined>();
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      return true;
    }

    return false;
  });
  const setTokenInLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
    Api.defaults.headers.Authorization = `Bearer ${value}`;
    setIsLogged(true);
  };
  const removeTokenInLocalStorage = (key: string) => {
    localStorage.removeItem(key);
    Api.defaults.headers.Authorization = null;
    setIsLogged(false);
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await Api.post('/auth/login', {
        email,
        password,
      });
      setTokenInLocalStorage('token', data.token);
    } catch (err) {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const register = async (email: string, name: string, password: string) => {
    try {
      const { data } = await Api.post('/auth/register', {
        email,
        name,
        password,
      });

      setTokenInLocalStorage('token', data.token);
    } catch (err) {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const logout = async () => {
    const token = localStorage.getItem('token');
    Api.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await Api.post('auth/logout');
    if (data.revoke) {
      removeTokenInLocalStorage('token');
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isLoading, isLogged, login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
}
