import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Auth from './Auth'; // Auth 컴포넌트 import

// QueryClient 생성
const queryClient = new QueryClient();

test('처음에 Login 컴포넌트가 렌더링 되어야 합니다', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Auth />
        </QueryClientProvider>
      </MemoryRouter>
    </RecoilRoot>
  );
  expect(screen.getByText('환영합니다!')).toBeInTheDocument(); // 환영 문구 확인
  expect(screen.getByText('로그인')).toBeInTheDocument(); // Login 컴포넌트의 특정 텍스트 확인
});

test('Join 컴포넌트로 전환이 가능해야 합니다', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Auth />
        </QueryClientProvider>
      </MemoryRouter>
    </RecoilRoot>
  );

  // Join 버튼 클릭 시 컴포넌트 전환 테스트
  fireEvent.click(screen.getByText('회원가입'));
  expect(screen.getByText('회원가입')).toBeInTheDocument(); // Join 컴포넌트의 특정 텍스트 확인
});

test('다시 Login 컴포넌트로 전환이 가능해야 합니다', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Auth />
        </QueryClientProvider>
      </MemoryRouter>
    </RecoilRoot>
  );

  // Join 버튼 클릭하여 컴포넌트 전환
  fireEvent.click(screen.getByText('회원가입'));
  expect(screen.getByText('회원가입')).toBeInTheDocument(); // Join 컴포넌트의 특정 텍스트 확인

  // Login 버튼 클릭하여 컴포넌트 전환
  fireEvent.click(screen.getByText('로그인'));
  expect(screen.getByText('로그인')).toBeInTheDocument(); // Login 컴포넌트의 특정 텍스트 확인
});
