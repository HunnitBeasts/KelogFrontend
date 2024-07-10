import React, { useState } from 'react';
import styled from 'styled-components';
import { RiNotification3Line, RiSearchLine } from '@remixicon/react';
import { Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userData } from '../util/dummyData';
import Modal from '../component/Modal';
import Auth from '../component/Auth';
import { useModal } from '../hooks/custom/useModal';
import { isLoginSelector } from '../recoil/selector/userSelecotr';
import { useLogout } from '../hooks/user';
import StyleButton from '../component/StyleButton';
import { headerState } from '../recoil/atom/utilState';

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
  const header = useRecoilValue(headerState);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isLogin = useRecoilValue(isLoginSelector);
  const { isModalOpen, openModal } = useModal();
  const logout = useLogout();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToWrite = () => {
    navigate('/write');
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <StyledHeader>
      <LogoDiv onClick={goToHome}>
        <img
          src="/logo512.png"
          alt="K-elog Logo"
          style={{ width: '30px', marginRight: '0.5rem', marginTop: '-0.3rem' }}
        />
        <Logo>{header}</Logo>
      </LogoDiv>
      <NavIcons>
        <IconStyle>
          <RiNotification3Line />
        </IconStyle>
        <IconStyle>
          <RiSearchLine />
        </IconStyle>
        {isLogin ? (
          <>
            <StyleButton text="새 글 작성" onClick={goToWrite} />
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
                <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
              </Menu>
            </FlexDiv>
          </>
        ) : (
          <StyleButton onClick={openModal} text="로그인" />
        )}
      </NavIcons>
      {isModalOpen && (
        <Modal>
          <Auth />
        </Modal>
      )}
    </StyledHeader>
  );
};

export default Header;
