import { PostJoinRequest, PostLoginRequest, PostLoginResponse } from '../model/user';
import api from '../util/api';

export const login = (data: PostLoginRequest) => {
  return api<PostLoginResponse>({ url: '/login', method: 'post', data });
};

export const join = (data: PostJoinRequest) => {
  return api({ url: '/join', method: 'post', data });
};
