import { GetPostDetailRequest, GetPostDetailResponse, GetPostsRequest, GetPostsResponse } from '../model/posts';
import api from '../util/api';

export const getPosts = (params: GetPostsRequest) => {
  return api<GetPostsResponse>({ url: '/posts', method: 'get', params });
};

export const getPostDetail = (params: GetPostDetailRequest) => {
  return api<GetPostDetailResponse>({ url: `/posts/${params.id}`, method: 'get', params });
};
