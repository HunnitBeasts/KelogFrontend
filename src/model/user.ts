export interface PostLoginRequest {
  email: string;
  password: string;
}

export interface PostLoginResponse {
  token: string;
}
