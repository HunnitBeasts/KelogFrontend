import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutWrapper from './LayoutWrapper';

const AppLayout = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

export default AppLayout;
