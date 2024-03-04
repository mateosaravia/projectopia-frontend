import { createContext, ReactNode, useState } from 'react';
import { IAuth } from '../models/IAuth';

export const AuthContext = createContext<IAuth>({
  isAuthenticated: false,
  role: '',
  logIn: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: '' });

  const logIn = (role: string) => {
    setAuth({ isAuthenticated: true, role: role });
  };

  const logOut = () => {
    setAuth({ isAuthenticated: false, role: '' });
  };

  return <AuthContext.Provider value={{ ...auth, logIn, logOut }}>{children}</AuthContext.Provider>;
};
