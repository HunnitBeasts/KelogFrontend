import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetPostDetailRequest, GetPostDetailResponse, GetPostsRequest, GetPostsResponse } from '../model/posts';
import { getPosts, getPostDetail } from '../api/posts';

export const useFetchPosts = (params: GetPostsRequest): UseQueryResult<GetPostsResponse> => {
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => getPosts(params),
    select: (data) => data.data,
  });
};

export const useFetchPostDetail = (params: GetPostDetailRequest): UseQueryResult<GetPostDetailResponse> => {
  return useQuery({
    queryKey: ['detail', params],
    queryFn: () => getPostDetail(params),
    select: (data) => data.data,
  });
};
