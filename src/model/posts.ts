export interface GetPostResponse {
  postId: number;
  postThumbImage: string;
  title: string;
  shortContent: string;
  regDate: string;
  commentCount: number;
  userThumbImage: string;
  nickname: string;
  likeCount: number;
}

export interface GetPostsResponse {
  results: GetPostResponse[];
  count: number;
}

export interface GetPostsRequest {
  tagName?: string;
  sort?: 'regDate';
  page: number;
  size?: number;
  search?: string;
  postType?: string;
  seriesId?: number;
  userId?: number;
  fields?: string[];
}
