import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiHeartFill } from '@remixicon/react';
import styled from 'styled-components';
import { GetPostResponse } from '../model/posts';

const Card = styled.div`
  width: calc(25% - 1rem);
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 1080px) {
    width: calc(33.3333% - 1rem);
  }

  @media (max-width: 750px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 576px) {
    width: calc(100% - 1rem);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
`;

const ShortContent = styled.p`
  font-size: 0.8rem;
  height: 60px;
  color: #666;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const Nickname = styled.span`
  font-size: 0.875rem;
  color: #333;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
`;

const Likes = styled.div`
  font-size: 0.875rem;
  color: #666;
  display: flex;
  align-items: center;
`;

const HeartIcon = styled(RiHeartFill)`
  font-size: 1rem;
  margin-right: 0.25rem;
`;

const DateContent = styled.div`
  font-size: 0.8rem;
  color: #bfbfbf;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
`;

interface CardsProps {
  post: GetPostResponse;
}

const Cards = ({ post }: CardsProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/posts/${post.postId}`);
  };

  return (
    <Card key={post.postId} onClick={handleCardClick}>
      <CardImage src={post.postThumbImage} alt={post.title} />
      <CardContent>
        <Title>{post.title}</Title>
        <ShortContent>{post.shortContent}</ShortContent>
        <DateContent>
          {post.regDate} · {post.commentCount}개의 댓글
        </DateContent>
        <Footer>
          <UserInfo>
            <UserImage src={post.userThumbImage} alt={post.nickname} />
            <Nickname>{post.nickname}</Nickname>
          </UserInfo>
          <Stats>
            <Likes>
              <HeartIcon /> {post.likeCount}
            </Likes>
          </Stats>
        </Footer>
      </CardContent>
    </Card>
  );
};

export default Cards;
