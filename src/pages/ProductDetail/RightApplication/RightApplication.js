import React from 'react';
import Button from './Button/Button';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const RightApplication = () => {
  return (
    <RightApplicationContainer>
      <Category>사진</Category>
      <Title>
        스마트폰 카메라 300% 활용법 기종 상관 없이 DSLR같은 풍경 사진 찍기
      </Title>
      <HaveClass>12월 30일 부터 수강가능</HaveClass>
      <Installment>5개월 할부</Installment>
      <PriceContainer>
        <InstallmentPrice>할부 할인가</InstallmentPrice>
        <PriceWrap>
          <Percent>35%</Percent>
          <Price>월 37,900원</Price>
        </PriceWrap>
      </PriceContainer>
      <MiddleLine />
      <DiscountWrap>
        <TotalDiscount>총 할인액</TotalDiscount>
        <TotalDiscountPrice>-103,200원</TotalDiscountPrice>
      </DiscountWrap>
      <MiddleLine />
      <Button />
    </RightApplicationContainer>
  );
};

export default RightApplication;

const RightApplicationContainer = styled.div`
  width: 285px;
  padding: 24px;
  border-radius: 3px;
  border: 1px solid ${theme.white};
  box-shadow: rgb(41 42 43 / 16%) 0px 2px 6px;
`;

const Category = styled.p`
  margin-bottom: 5px;
  font-size: ${theme.fontRegular};
  line-height: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: ${theme.fontMedium};
  font-weight: ${theme.weightBold};
  line-height: 25px;
`;

const HaveClass = styled.p`
  display: inline-block;
  padding: 6px 5px;
  color: ${theme.gray};
  background: ${theme.lightGray};
  font-size: ${theme.fontMicro};

  &::selection {
    color: ${theme.white};
    background-color: #ff5600;
  }
`;

const Installment = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 0 10px 0;
  color: ${theme.gray};
  font-size: ${theme.fontMicro};
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InstallmentPrice = styled.p`
  font-size: ${theme.fontRegular};
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Percent = styled.p`
  margin-right: 5px;
  font-size: ${theme.fontSemiMedium};
`;

const Price = styled.p`
  font-weight: ${theme.weightBold};
  font-size: ${theme.fontMedium};
  letter-spacing: -0.5px;
`;

const MiddleLine = styled.div`
  margin: 20px 0;
  border: 1px solid ${theme.lightGray};
`;

const DiscountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalDiscount = styled.p`
  font-size: ${theme.fontRegular};
`;

const TotalDiscountPrice = styled.h1`
  color: #ff518f;
  font-size: ${theme.fontMedium};
  font-weight: 900;
  letter-spacing: -0.5px;
`;
