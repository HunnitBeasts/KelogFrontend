import React, { useEffect, useState } from 'react';
import { RiFacebookFill, RiGithubFill, RiGoogleFill } from '@remixicon/react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useLogin } from '../hooks/user';
import { isLoginSelector } from '../recoil/selector/userSelecotr';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const SocialButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SwitchText = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  cursor: pointer;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

interface LoginProps {
  toggleForm: () => void;
}

const Login = ({ toggleForm }: LoginProps) => {
  const { mutate } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginSelector);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ email, password });
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/trend');
    }
  }, [isLogin]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" placeholder="이메일을 입력하세요." value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">로그인</Button>
      <SocialButtons>
        <SocialButton>
          <RiGithubFill />
        </SocialButton>
        <SocialButton>
          <RiGoogleFill />
        </SocialButton>
        <SocialButton>
          <RiFacebookFill />
        </SocialButton>
      </SocialButtons>
      <SwitchText onClick={toggleForm}>회원가입</SwitchText>
    </Form>
  );
};

export default Login;
