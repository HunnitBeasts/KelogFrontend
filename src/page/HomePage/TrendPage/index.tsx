import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from '../../../component/Cards';
import { useFetchPosts } from '../../../hooks/posts';
import InfiniteList from '../../../component/InfiniteList';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const TrendPage = () => {
  const [page, setPage] = useState(20);
  const { data, refetch, isLoading, isFetching } = useFetchPosts({ page });

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 20);
  };

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <InfiniteList onLoadMore={onLoadMore} isLoading={isLoading} isFetching={isFetching}>
      <CardContainer>{data?.results.map((post) => <Cards key={post.postId} post={post} />)}</CardContainer>
    </InfiniteList>
  );
};

export default TrendPage;
