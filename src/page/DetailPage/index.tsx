import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from '@remixicon/react';
import StyleButton from '../../component/StyleButton';
import { headerState } from '../../recoil/atom/utilState';
import { useFetchPostDetail } from '../../hooks/posts';
import Loading from '../../component/Loading';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const Date = styled.div`
  color: #888;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Tag = styled.span`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #fafafa;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LikeAndShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
`;

const ShareButton = styled.button`
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: black;
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  border-radius: 5px;
  width: 20rem;
`;

const TextBox = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  flex-basis: 90%;
`;

const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 10%;
`;

const NavigationText = styled.div`
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
`;

const NavigationTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
`;

const DetailPage = () => {
  const params = useParams();
  const postId = Number(params.id);
  const { data: postsDetailData, isLoading } = useFetchPostDetail({ id: postId });
  const setHeader = useSetRecoilState(headerState);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  useEffect(() => {
    if (postsDetailData?.kelogName) {
      setHeader(postsDetailData.kelogName);
    }
  }, [postsDetailData?.kelogName, setHeader]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        <Title>{postsDetailData?.title}</Title>
        <MetaData>
          <Author>
            <AuthorName>{postsDetailData?.nickname}</AuthorName>
            <Date>{postsDetailData?.regDate}</Date>
          </Author>
          <StyleButton text="팔로우" />
        </MetaData>
        <Tags>{postsDetailData?.tags.map((tag) => <Tag key={tag.tagName}>{tag.tagName}</Tag>)}</Tags>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: postsDetailData?.content || '' }} />
      <MetaData>
        <Author>
          <AuthorImage src={postsDetailData?.thumbImage} alt="Author" />
          <AuthorName>{postsDetailData?.nickname}</AuthorName>
        </Author>
        <StyleButton text="팔로우" />
      </MetaData>
      <Navigation>
        {postsDetailData?.beforePost?.postId && (
          <NavigationLink to={`/posts/${postsDetailData.beforePost.postId}`}>
            <ArrowBox>
              <RiArrowLeftCircleLine size={24} />
            </ArrowBox>
            <TextBox>
              <NavigationText>이전 포스트</NavigationText>
              <NavigationTitle>{postsDetailData?.beforePost.title}</NavigationTitle>
            </TextBox>
          </NavigationLink>
        )}
        {postsDetailData?.afterPost?.postId && (
          <NavigationLink to={`/posts/${postsDetailData.afterPost.postId}`}>
            <TextBox>
              <NavigationText>다음 포스트</NavigationText>
              <NavigationTitle>{postsDetailData?.afterPost.title}</NavigationTitle>
            </TextBox>
            <ArrowBox>
              <RiArrowRightCircleLine size={24} />
            </ArrowBox>
          </NavigationLink>
        )}
      </Navigation>
      <LikeAndShare>
        <ShareButton onClick={handleShare}>🔗</ShareButton>
      </LikeAndShare>
    </Container>
  );
};

export default DetailPage;
