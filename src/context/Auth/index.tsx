import React, { useCallback, useEffect, useState } from 'react';

import { Api } from '../../api/api';
import { IUser } from '../../repositories/IUser';

type AuthContextProps = {
  isLoading: boolean;
  isLogged: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  userVerifyAndReturned: () => void;
  register: (email: string, name: string, password: string) => void;
  user: IUser | undefined;
};

export const AuthContext = React.createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: React.ReactNode;
};

type isErrorProps = {
  status: number;
  message: string;
};

export interface ITokenAxiosResponse {
  type: string;
  token: string;
  expires_at: Date;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | undefined>();
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
      setIsLoading(false);
      setIsError({
        status: err.response.status,
        message: 'Credencias inválidas',
      });
    }

    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    Api.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await Api.post('auth/logout');
    if (data.revoke) {
      removeTokenInLocalStorage('token');
    }
    setIsLoading(false);
  };

  const register = async (email: string, name: string, password: string) => {
    setIsLoading(true);
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
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const userVerifyAndReturned = useCallback(async () => {
    setIsLoading(true);
    if (isLogged) {
      await Api.post<IUser>('auth/verify')
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          logout();
        });
    }
    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    userVerifyAndReturned();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, isLogged, login, logout, register, userVerifyAndReturned, user }}>
      {children}
    </AuthContext.Provider>
  );
}
