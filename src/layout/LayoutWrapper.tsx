import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyeldLayout = styled.div`
  background-color: white;
  padding: 0;
  margin: 0;
`;

const Main = styled.main`
  padding: 2rem 8rem;

  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 992px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 1rem 0.5rem;
  }
`;

export default ({ children }: { children: ReactNode }) => {
  return (
    <StyeldLayout>
      <Header />
      <Main>{children}</Main>
    </StyeldLayout>
  );
};
