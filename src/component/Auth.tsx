import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Join from './Join';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeText = styled.h1`
  margin-bottom: 20px;
`;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <WelcomeText>환영합니다!</WelcomeText>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Join toggleForm={toggleForm} />}
    </Container>
  );
};

export default Auth;
