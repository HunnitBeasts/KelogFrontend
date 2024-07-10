import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { RiTimeLine, RiWifiLine, RiLineChartLine } from '@remixicon/react';
import { Select } from 'antd';
import TrendPage from './TrendPage';
import FeedPage from './FeedPage';
import LatestPage from './LatestPage';
import { headerState } from '../../recoil/atom/utilState';

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
  const setHeader = useSetRecoilState(headerState);

  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setHeader('K-elog');
  }, []);
  return (
    <Container>
      <Tabs>
        <div>
          <Tab to="/home/trend" $isActive={activeTab === '/home/trend'} onClick={() => handleTabClick('/home/trend')}>
            <IconWrapper>
              <RiLineChartLine />
            </IconWrapper>
            트렌딩
          </Tab>
          <Tab
            to="/home/latest"
            $isActive={activeTab === '/home/latest'}
            onClick={() => handleTabClick('/home/latest')}
          >
            <IconWrapper>
              <RiTimeLine />
            </IconWrapper>
            최신
          </Tab>
          <Tab to="/home/feed" $isActive={activeTab === '/home/feed'} onClick={() => handleTabClick('/home/feed')}>
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
