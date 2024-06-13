import React from 'react';
import { dummyData } from '../../../util/dummyData';
import Cards from '../../../component/Cards';

const index = () => {
  return <Cards posts={dummyData.posts} />;
};

export default index;
