import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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

interface ButtonProps {
  text: string;
  onClick?: () => void;
}
const StyleButton = ({ text, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default StyleButton;
