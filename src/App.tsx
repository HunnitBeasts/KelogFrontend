import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './page/HomePage';
import AppLayout from './layout/AppLayout';
import DetailPage from './page/DetailPage';
import WritePage from './page/WritePage';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/home/trend" />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/posts/:id" element={<DetailPage />} />
          <Route path="/write" element={<WritePage />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
};

export default App;
