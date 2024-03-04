export interface IAuth {
  isAuthenticated: boolean;
  isAuthenticatedInRef: any;
  role: string;
  logIn: (role: string) => void;
  logOut: () => void;
}
