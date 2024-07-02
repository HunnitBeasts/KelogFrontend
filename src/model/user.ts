export interface PostLoginRequest {
  email: string;
  password: string;
}

export interface PostLoginResponse {
  token: string;
}

export interface PostJoinRequest {
  name: string;
  nickname: string;
  id: string;
  email: string;
  password: string;
  intro: string;
}
