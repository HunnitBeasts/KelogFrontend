import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetPostsRequest, GetPostsResponse } from '../model/posts';
import { getPosts } from '../api/posts';

export const useFetchPosts = (params: GetPostsRequest): UseQueryResult<GetPostsResponse> => {
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => getPosts(params),
    select: (data) => data.data,
  });
};
