import React, { useMemo, useState } from 'react';

type AuthContextProps = {
  isLoading: boolean;
  isLogged: boolean;
  login(email: string, password: string): void;
  logout(): void;
};

export const AuthContext = React.createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  const logout = () => {
    console.log('logout');
  };

  return <AuthContext.Provider value={{ isLoading, isLogged, login, logout }}>{children}</AuthContext.Provider>;
}
