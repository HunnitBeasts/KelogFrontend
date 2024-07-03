import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { RiTimeLine, RiWifiLine, RiLineChartLine } from '@remixicon/react';
import { Select } from 'antd';
import TrendPage from './TrendPage';
import FeedPage from './FeedPage';
import LatestPage from './LatestPage';

const Container = styled.div``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Tab = styled(Link)<{ $isActive: boolean }>`
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2rem;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #333' : 'none')};

  &:last-child {
    margin-right: 0;
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  & > svg {
    height: 18px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Home = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <Container>
      <Tabs>
        <div>
          <Tab to="/trend" $isActive={activeTab === '/trend'} onClick={() => handleTabClick('/trend')}>
            <IconWrapper>
              <RiLineChartLine />
            </IconWrapper>
            트렌딩
          </Tab>
          <Tab to="/latest" $isActive={activeTab === '/latest'} onClick={() => handleTabClick('/latest')}>
            <IconWrapper>
              <RiTimeLine />
            </IconWrapper>
            최신
          </Tab>
          <Tab to="/feed" $isActive={activeTab === '/feed'} onClick={() => handleTabClick('/feed')}>
            <IconWrapper>
              <RiWifiLine />
            </IconWrapper>
            피드
          </Tab>
        </div>
        <FlexDiv>
          <Select defaultValue="this_day" style={{ width: 120 }}>
            <Select.Option value="this_day">오늘</Select.Option>
            <Select.Option value="this_week">이번 주</Select.Option>
            <Select.Option value="this_month">이번 달</Select.Option>
            <Select.Option value="this_year">올해</Select.Option>
          </Select>
        </FlexDiv>
      </Tabs>
      <Routes>
        <Route path="/" element={<TrendPage />} />
        <Route path="/trend" element={<TrendPage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Container>
  );
};

export default Home;
