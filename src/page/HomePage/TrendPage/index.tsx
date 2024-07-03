import React from 'react';
import { dummyData } from '../../../util/dummyData';
import Cards from '../../../component/Cards';

const TrendPage = () => {
  return <Cards posts={dummyData.posts} />;
};

export default TrendPage;
