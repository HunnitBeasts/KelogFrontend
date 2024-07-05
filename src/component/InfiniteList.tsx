import React, { ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from './Loading';

interface Props {
  children: ReactNode;
  onLoadMore: () => void;
  isLoading: boolean;
  isFetching: boolean;
}

const InfiniteList = ({ children, onLoadMore, isLoading, isFetching }: Props) => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  const scrollPosition = useRef(0);

  useEffect(() => {
    if (!inView) return;

    scrollPosition.current = window.scrollY;
    onLoadMore();
  }, [inView]);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      window.scrollTo(0, scrollPosition.current);
    }
  }, [isLoading, isFetching]);

  return (
    <>
      {isLoading ? <Loading /> : children}
      <div ref={ref}>{!isLoading && isFetching && <Loading />}</div>
    </>
  );
};

export default InfiniteList;
