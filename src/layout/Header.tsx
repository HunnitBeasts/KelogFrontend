import React from 'react';
import styled from 'styled-components';
import { RiNotification3Line, RiSearchLine } from '@remixicon/react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 992px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 0.5rem 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1rem;

    @media (max-width: 768px) {
      margin-left: 0.5rem;
    }
  }
`;

const IconStyle = styled.div`
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const WriteButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
  }

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
  }

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>K-elog</Logo>
      <NavIcons>
        <IconStyle>
          <RiNotification3Line />
        </IconStyle>
        <IconStyle>
          <RiSearchLine />
        </IconStyle>
        <WriteButton>새 글 작성</WriteButton>
        <StyledButton>로그인</StyledButton>
      </NavIcons>
    </StyledHeader>
  );
};

export default Header;
