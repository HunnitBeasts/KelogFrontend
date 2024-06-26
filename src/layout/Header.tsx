import React, { useState } from 'react';
import styled from 'styled-components';
import { RiNotification3Line, RiSearchLine } from '@remixicon/react';
import { Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'; // Ensure this import is correctly resolved
import { useNavigate } from 'react-router-dom';
import { userData } from '../util/dummyData';

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

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      <LogoDiv onClick={goToHome}>
        <img
          src="/logo512.png"
          alt="K-elog Logo"
          style={{ width: '30px', marginRight: '0.5rem', marginTop: '-0.3rem' }}
        />
        <Logo>K-elog</Logo>
      </LogoDiv>
      <NavIcons>
        <IconStyle>
          <RiNotification3Line />
        </IconStyle>
        <IconStyle>
          <RiSearchLine />
        </IconStyle>
        <WriteButton>새 글 작성</WriteButton>
        <StyledButton>로그인</StyledButton>
        <FlexDiv>
          <IconButton onClick={handleClick}>
            {userData.thumbImage ? <Avatar src={userData.thumbImage} alt="User Profile" /> : <AccountCircle />}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>프로필</MenuItem>
            <MenuItem onClick={handleClose}>설정</MenuItem>
            <MenuItem onClick={handleClose}>로그아웃</MenuItem>
          </Menu>
        </FlexDiv>
      </NavIcons>
    </StyledHeader>
  );
};

export default Header;
