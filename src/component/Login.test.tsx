import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './Login';
import { useLogin } from '../hooks/user';
import { isLoginSelector } from '../recoil/selector/userSelecotr';

jest.mock('../hooks/user');
jest.mock('recoil');

const mockUseLogin = useLogin as jest.Mock;
const mockUseRecoilValue = useRecoilValue as jest.Mock;

describe('Login 컴포넌트 테스트', () => {
  const toggleForm = jest.fn();
  const queryClient = new QueryClient();

  beforeEach(() => {
    mockUseLogin.mockReturnValue({ mutate: jest.fn() });
    jest.clearAllMocks();
  });

  test('Login 컴포넌트가 처음 렌더링 되어야 합니다', () => {
    mockUseRecoilValue.mockImplementation((selector) => {
      if (selector === isLoginSelector) return false;
    });

    render(
      <RecoilRoot>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Login toggleForm={toggleForm} />
          </QueryClientProvider>
        </MemoryRouter>
      </RecoilRoot>
    );

    expect(screen.getByPlaceholderText('이메일을 입력하세요.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('비밀번호를 입력하세요.')).toBeInTheDocument();
    expect(screen.getByText('로그인')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /google/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByText('회원가입')).toBeInTheDocument();
  });

  test('이메일과 비밀번호 입력 시 상태가 변경되어야 합니다', () => {
    mockUseRecoilValue.mockImplementation((selector) => {
      if (selector === isLoginSelector) return false;
    });

    render(
      <RecoilRoot>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Login toggleForm={toggleForm} />
          </QueryClientProvider>
        </MemoryRouter>
      </RecoilRoot>
    );

    const emailInput = screen.getByPlaceholderText('이메일을 입력하세요.');
    const passwordInput = screen.getByPlaceholderText('비밀번호를 입력하세요.');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  test('로그인 버튼 클릭 시 mutate 함수가 호출되어야 합니다', () => {
    const mutate = jest.fn();
    mockUseLogin.mockReturnValue({ mutate });

    mockUseRecoilValue.mockImplementation((selector) => {
      if (selector === isLoginSelector) return false;
    });

    render(
      <RecoilRoot>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Login toggleForm={toggleForm} />
          </QueryClientProvider>
        </MemoryRouter>
      </RecoilRoot>
    );

    fireEvent.change(screen.getByPlaceholderText('이메일을 입력하세요.'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('비밀번호를 입력하세요.'), {
      target: { value: 'password123' }
    });

    fireEvent.click(screen.getByText('로그인'));

    expect(mutate).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });

  test('회원가입 링크 클릭 시 toggleForm 함수가 호출되어야 합니다', () => {
    mockUseRecoilValue.mockImplementation((selector) => {
      if (selector === isLoginSelector) return false;
    });

    render(
      <RecoilRoot>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Login toggleForm={toggleForm} />
          </QueryClientProvider>
        </MemoryRouter>
      </RecoilRoot>
    );

    fireEvent.click(screen.getByText('회원가입'));

    expect(toggleForm).toHaveBeenCalled();
  });

  test('로그인 상태가 true이면 /trend로 navigate되어야 합니다', () => {
    mockUseRecoilValue.mockImplementation((selector) => {
      if (selector === isLoginSelector) return true;
    });

    const mockNavigate = jest.fn();
    jest.doMock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <RecoilRoot>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Login toggleForm={toggleForm} />
          </QueryClientProvider>
        </MemoryRouter>
      </RecoilRoot>
    );

    expect(mockNavigate).toHaveBeenCalledWith('/trend');
  });
});
