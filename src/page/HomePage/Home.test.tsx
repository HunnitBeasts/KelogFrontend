import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { act } from 'react'; // react에서 act를 가져옴
import Home from '.';

// TrendPage, LatestPage, FeedPage 컴포넌트를 모의(mock)로 정의
jest.mock('./TrendPage', () => () => <div>트렌드 페이지</div>);
jest.mock('./LatestPage', () => () => <div>최신 페이지</div>);
jest.mock('./FeedPage', () => () => <div>피드 페이지</div>);

describe('Home 컴포넌트', () => {
  test('기본적으로 Home 컴포넌트를 렌더링하고 트렌드 페이지로 이동', async () => {
    // Given: 초기 경로를 '/'로 설정하고 Home 컴포넌트를 렌더링
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </MemoryRouter>
      );
    });

    // When: 초기 렌더링이 완료되면

    // Then: 기본적으로 트렌드 페이지가 표시되는지 확인
    expect(screen.getByText('트렌드 페이지')).toBeInTheDocument();
  });

  test('트렌드 탭 클릭 시 TrendPage로 이동', async () => {
    // Given: 초기 경로를 '/'로 설정하고 Home 컴포넌트를 렌더링
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </MemoryRouter>
      );
    });

    // When: "트렌딩" 탭을 클릭
    await act(async () => {
      fireEvent.click(screen.getByText('트렌딩'));
    });

    // Then: 트렌드 페이지가 표시되는지 확인
    expect(screen.getByText('트렌드 페이지')).toBeInTheDocument();
  });

  test('최신 탭 클릭 시 LatestPage로 이동', async () => {
    // Given: 초기 경로를 '/'로 설정하고 Home 컴포넌트를 렌더링
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </MemoryRouter>
      );
    });

    // When: "최신" 탭을 클릭
    await act(async () => {
      fireEvent.click(screen.getByText('최신'));
    });

    // Then: 최신 페이지가 표시되는지 확인
    expect(screen.getByText('최신 페이지')).toBeInTheDocument();
  });

  test('피드 탭 클릭 시 FeedPage로 이동', async () => {
    // Given: 초기 경로를 '/'로 설정하고 Home 컴포넌트를 렌더링
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </MemoryRouter>
      );
    });

    // When: "피드" 탭을 클릭
    await act(async () => {
      fireEvent.click(screen.getByText('피드'));
    });

    // Then: 피드 페이지가 표시되는지 확인
    expect(screen.getByText('피드 페이지')).toBeInTheDocument();
  });
});
