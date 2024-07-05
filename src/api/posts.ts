import { GetPostsRequest, GetPostsResponse } from '../model/posts';
import api from '../util/api';

export const getPosts = (params: GetPostsRequest) => {
  return api<GetPostsResponse>({ url: '/posts', method: 'get', params });
};
