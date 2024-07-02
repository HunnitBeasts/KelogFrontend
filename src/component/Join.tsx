import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useJoin } from '../hooks/user';
import {
  userIdErrorMessage,
  passwordErrorMessage,
  passwordCheckErrorMessage,
  nicknameErrorMessage,
  emailErrorMessage,
  nameErrorMessage,
} from '../util/validation';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input<{ $isInvalid: boolean }>`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => (props.$isInvalid ? 'red' : '#ccc')};
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

interface JoinProps {
  toggleForm: () => void;
}

const Join = ({ toggleForm }: JoinProps) => {
  const { mutate, isSuccess } = useJoin();
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [intro, setIntro] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    nickname: '',
    id: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nameError = nameErrorMessage(name);
    const nicknameError = nicknameErrorMessage(nickname);
    const idError = userIdErrorMessage(id);
    const emailError = emailErrorMessage(email);
    const passwordError = passwordErrorMessage(password);
    const checkPasswordError = passwordCheckErrorMessage(password, checkPassword);

    if (nameError || nicknameError || idError || emailError || passwordError || checkPasswordError) {
      setErrors({
        name: nameError,
        nickname: nicknameError,
        id: idError,
        email: emailError,
        password: passwordError,
        checkPassword: checkPasswordError,
      });
    } else {
      mutate({ name, nickname, id, email, password, intro });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toggleForm();
    }
  }, [isSuccess]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
        $isInvalid={!!errors.name}
      />
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      <Input
        type="text"
        placeholder="닉네임을 입력하세요."
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        $isInvalid={!!errors.nickname}
      />
      {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
      <Input
        type="text"
        placeholder="아이디를 입력하세요."
        value={id}
        onChange={(e) => setId(e.target.value)}
        $isInvalid={!!errors.id}
      />
      {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
      <Input
        type="email"
        placeholder="이메일을 입력하세요."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        $isInvalid={!!errors.email}
      />
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        $isInvalid={!!errors.password}
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      <Input
        type="password"
        placeholder="비밀번호를 다시 입력하세요."
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
        $isInvalid={!!errors.checkPassword}
      />
      {errors.checkPassword && <ErrorMessage>{errors.checkPassword}</ErrorMessage>}
      <Input
        type="text"
        placeholder="한 줄 소개를 입력하세요."
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        $isInvalid={false}
      />
      <Button type="submit">회원가입</Button>
      <SwitchText onClick={toggleForm}>로그인</SwitchText>
    </Form>
  );
};

export default Join;
