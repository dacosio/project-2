export interface TokenProps {
  token: string | null;
}
export interface AccessTokenProps {
  accessToken: string | null;
  data?: {
    accessToken?: string;
  };
}

export interface LoginProps {
  email: string;
  password: string;
}
