export interface User {
  name: string;
  userName: string;
  email: string;
  mobile: string;
}

export interface LoginState {
  user?: User;
  error: boolean;
}
