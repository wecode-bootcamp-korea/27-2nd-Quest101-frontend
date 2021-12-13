import React, { useState } from 'react';
import QuestSubmitButton from './QuestSubmitButton/QuestSubmitButton';
import Status from './Status/Status';
import HeartButton from './HeartButton/HeartButton';
import styled from 'styled-components';

import { GiHeartPlus, GiBookCover, GiCharm } from 'react-icons/gi';
import { FaPaintBrush } from 'react-icons/fa';
import { GrShare } from 'react-icons/gr';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiHeart } from 'react-icons/hi';

const RightApplication = ({ creatorInfo }) => {
  const {
    category,
    title,
    price,
    discount,
    percent,
    month,
    health,
    Intellect,
    Charm,
    art,
  } = creatorInfo;

  const [heart, setHeartRed] = useState({
    state: false,
    number: 1000,
  });

  const isLikeyOnHandler = () => {
    setHeartRed(prev => ({
      state: !prev.state,
      number: prev.number,
    }));
  };

  return (
    <RightApplicationContainer>
      {category ? <Category>{category}</Category> : null}
      {title ? <Title>{title}</Title> : null}
      {month ? <Installment>{month}개월 할부</Installment> : null}
      <PriceContainer>
        <InstallmentPrice>할부 할인가</InstallmentPrice>
        <PriceWrap>
          {percent ? <Percent>{percent}%</Percent> : null}
          {price ? <Price>월 {price}원</Price> : null}
        </PriceWrap>
      </PriceContainer>
      <GrayLine />
      <DiscountWrap>
        <TotalDiscount>총 할인액</TotalDiscount>
        {discount ? (
          <TotalDiscountPrice>-{discount}원</TotalDiscountPrice>
        ) : null}
      </DiscountWrap>
      <GrayLine />
      <StatusWrap>
        {health ? (
          <Status status="체력" icon={<GiHeartPlus />} number={health} />
        ) : null}
        {Intellect ? (
          <Status status="지능" icon={<GiBookCover />} number={Intellect} />
        ) : null}
      </StatusWrap>
      <StatusWrap>
        {Charm ? (
          <Status status="매력" icon={<GiCharm />} number={Charm} />
        ) : null}
        {art ? (
          <Status status="예술" icon={<FaPaintBrush />} number={art} />
        ) : null}
      </StatusWrap>
      <GrayLine />
      <HeartButtonContainer>
        <label>
          <HeartButtonCheckbox onClick={isLikeyOnHandler} />
          <HeartButton
            text={heart.state ? heart.number + 1 : heart.number}
            icon={heart.state ? <Heart /> : <HeartOutline />}
            onClick={isLikeyOnHandler}
          />
        </label>
        <HeartButton text="공유하기" icon={<GrShare />} />
      </HeartButtonContainer>
      <QuestSubmitButton addToCart={() => alert('결재가 완료되었습니다.')} />
    </RightApplicationContainer>
  );
};

const RightApplicationContainer = styled.div`
  width: 285px;
  padding: 24px;
  border-radius: 3px;
  box-shadow: rgb(41 42 43 / 16%) 0px 2px 6px;
`;

const Category = styled.p`
  margin-bottom: 5px;
  font-size: ${props => props.theme.fontRegular};
  line-height: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightBold};
  line-height: 25px;
`;

const Installment = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 0 10px 0;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontMicro};
`;

const PriceContainer = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
`;

const InstallmentPrice = styled.p`
  font-size: ${props => props.theme.fontRegular};
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Percent = styled.p`
  margin-right: 5px;
  font-size: ${props => props.theme.fontSemiMedium};
`;

const Price = styled.p`
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontMedium};
  letter-spacing: -0.5px;
`;

const GrayLine = styled.div`
  margin: 20px 0;
  border: 1px solid ${props => props.theme.lightGray};
`;

const DiscountWrap = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
`;

const TotalDiscount = styled.p`
  color: ${props => props.theme.red};
  font-size: ${props => props.theme.fontRegular};
`;

const TotalDiscountPrice = styled.h1`
  color: ${props => props.theme.red};
  font-size: ${props => props.theme.fontMedium};
  font-weight: 900;
  letter-spacing: -0.5px;
`;

const StatusWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const HeartButtonContainer = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
  width: 90%;
  margin: 20px auto;
`;

const Heart = styled(HiHeart)`
  color: red;
  font-size: 22px;
`;

const HeartOutline = styled(HiOutlineHeart)`
  font-size: 20px;
`;

const HeartButtonCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export default RightApplication;
