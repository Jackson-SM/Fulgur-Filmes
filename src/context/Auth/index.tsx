import React, { useEffect, useMemo, useState } from 'react';

import { Api } from '../../api/api';

type AuthContextProps = {
  isLoading: boolean;
  isLogged: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  userVerifyAndReturned: () => void;
  register: (email: string, name: string, password: string) => void;
};

export const AuthContext = React.createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: React.ReactNode;
};

type isErrorProps = {
  status: number;
  message: string;
};

export interface IUser {
  id: number;
  email: string;
  name: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserAxiosResponse {
  user: IUser;
}

export interface ITokenAxiosResponse {
  type: string;
  token: string;
  expires_at: Date;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      return true;
    }

    return false;
  });
  const [isError, setIsError] = useState<isErrorProps | boolean>(false);

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
    setIsLoading(true);
    try {
      const { data } = await Api.post('/auth/login', {
        email,
        password,
      });
      setTokenInLocalStorage('token', data.token);
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
      removeTokenInLocalStorage('token');
    }
  };

  const register = async (email: string, name: string, password: string) => {
    try {
      const { data } = await Api.post<ITokenAxiosResponse>('auth/register', {
        email,
        name,
        password,
      });

      setTokenInLocalStorage('token', data.token);
    } catch (err: any) {
      setIsError({
        status: err.response.status,
        message: 'Não foi possível completar o registro',
      });
    }
  };

  const userVerifyAndReturned = async () => {
    const token = localStorage.getItem('token');

    try {
      setIsLoading(true);
      const { data } = await Api.post<IUserAxiosResponse>('auth/verify');

      const { user } = data;

      console.log(user);
    } catch (err) {
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoading, isLogged, login, logout, register, userVerifyAndReturned }}>
      {children}
    </AuthContext.Provider>
  );
}
