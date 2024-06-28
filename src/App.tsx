import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './page/HomePage';
import AppLayout from './layout/AppLayout';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/*" element={<HomePage />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
};

export default App;
