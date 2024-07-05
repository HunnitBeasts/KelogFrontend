import React from 'react';
import { CircleLoader } from 'react-spinners';
import styled from 'styled-components';

const DateContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <DateContent>
      <CircleLoader color="#000" />
    </DateContent>
  );
};

export default Loading;
