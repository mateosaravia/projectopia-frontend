export interface IAuth {
  isAuthenticated: boolean;
  role: string;
  logIn: (role: string) => void;
  logOut: () => void;
}
