import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

const Button = () => {
  return <ButtonContainer>클래스 신청하기</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  border-radius: 3px;
  background-color: ${theme.orange};
  color: ${theme.white};
  font-size: ${theme.fontSemiMedium};
  font-weight: ${theme.weightBold};
  text-align: center;
`;
