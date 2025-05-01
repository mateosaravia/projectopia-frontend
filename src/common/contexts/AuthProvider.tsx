import { createContext, ReactElement, ReactNode, useRef, useState } from 'react';
import { IAuth } from '../models/IAuth';

export const AuthContext = createContext<IAuth>({
  isAuthenticated: false,
  isAuthenticatedInRef: false,
  role: '',
  logIn: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: '' });
  const isAuthenticatedInRef = useRef(false);
  isAuthenticatedInRef.current = auth.isAuthenticated;

  const logIn = (role: string) => {
    setAuth({ isAuthenticated: true, role: role });
  };

  const logOut = () => {
    setAuth({ isAuthenticated: false, role: '' });
  };

  return (
    <AuthContext.Provider value={{ ...auth, isAuthenticatedInRef, logIn, logOut }}>{children}</AuthContext.Provider>
  );
};
