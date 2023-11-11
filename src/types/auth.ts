export interface IAuth {
  title: string;
  onSubmit: () => void;
  username: string;
  password: string;
  onChange: (name: string, value: string) => void;
}

export interface IAuthData {
  username: string;
  password: string;
}
