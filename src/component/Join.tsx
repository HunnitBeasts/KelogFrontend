import React from 'react';
import styled from 'styled-components';

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

interface JoinProps {
  toggleForm: () => void;
}

const Join = ({ toggleForm }: JoinProps) => {
  return (
    <Form>
      <Input type="text" placeholder="이름을 입력하세요." />
      <Input type="text" placeholder="닉네임을 입력하세요." />
      <Input type="text" placeholder="아이디를 입력하세요." />
      <Input type="email" placeholder="이메일을 입력하세요." />
      <Input type="password" placeholder="비밀번호를 입력하세요." />
      <Input type="password" placeholder="비밀번호를 다시 입력하세요." />
      <Input type="text" placeholder="한 줄 소개를 입력하세요." />
      <Button>회원가입</Button>
      <SwitchText onClick={toggleForm}>로그인</SwitchText>
    </Form>
  );
};

export default Join;
