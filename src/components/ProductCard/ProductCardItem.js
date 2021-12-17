import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton/LikeButton';
import styled from 'styled-components';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

const ProductCardItem = ({ productCardInfo }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(false);

  const handleLike = () => {
    setLike(!like);
    setLikeCount(number => (like ? number - 1 : number + 1));
  };

  return (
    <Container key={productCardInfo.course_id}>
      <ThumbnailWrapper>
        <Link to={`/detail/${productCardInfo.course_id}`}>
          <Thumbnail src={productCardInfo.thumbnail} />
        </Link>
        <LikeButtonWrapper onClick={handleLike}>
          <LikeButton
            icon={like ? <LikeIcon /> : <DisLikeIcon />}
            onClick={handleLike}
          />
        </LikeButtonWrapper>
      </ThumbnailWrapper>
      <Link to={`/detail/${productCardInfo.course_id}`}>
        <Container>
          <UserName>{productCardInfo.user_name}</UserName>
          <CourseName>{productCardInfo.course_name}</CourseName>
          <LikeCountWrapper>
            <LikeCountIcon />
            <LikeCount>{likeCount}</LikeCount>
          </LikeCountWrapper>
          <PriceWrapper>
            <RateDiscount>{productCardInfo.discount_rate}</RateDiscount>
            <Price>
              월{' '}
              {Number(
                Math.round(productCardInfo.discount_price)
              ).toLocaleString()}
              원
            </Price>
            <PaymentPeriod>
              &#40;{productCardInfo.payment_period}개월&#41;
            </PaymentPeriod>
          </PriceWrapper>
        </Container>
      </Link>
    </Container>
  );
};

export default ProductCardItem;

const Container = styled.div`
  width: 250px;
  color: ${props => props.theme.black};
  padding-right: 15px;
`;

const LikeButtonWrapper = styled.button`
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 1;
`;
const LikeIcon = styled(HiHeart)`
  color: red;
  font-size: 24px;
`;
const DisLikeIcon = styled(HiOutlineHeart)`
  font-size: 24px;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
`;
const Thumbnail = styled.img`
  width: 250px;
  height: 200px;
  margin-top: 30px;
  border-radius: ${props => props.theme.borderRadius4};
  object-fit: cover;
`;
const UserName = styled.h5`
  font-size: ${props => props.theme.fontMicro};
  font-weight: ${props => props.theme.weightBold};
  margin: 5px 0;
`;
const CourseName = styled.h3`
  padding: 4px 0 8px 0;
  height: 40px;
  line-height: 18px;
  font-size: ${props => props.theme.fontRegular};
`;
const LikeCountWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightGray};
  padding-bottom: 8px;
`;
const LikeCountIcon = styled(HiHeart)`
  color: ${props => props.theme.gray};
  font-size: 12px;
  margin-right: 2px;
`;
const LikeCount = styled.span`
  color: ${props => props.theme.gray};
  font-size: 12px;
`;
const PriceWrapper = styled.div`
  ${props => props.theme.flex('', 'center', '')}
  padding-top: 15px;
`;
const RateDiscount = styled.p`
  font-size: 13px;
  font-weight: ${props => props.theme.weightBold};
  color: ${props => props.theme.orange};
`;
const Price = styled.p`
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightBold};
  color: ${props => props.theme.black};
  padding: 0 5px;
`;
const PaymentPeriod = styled.p`
  font-size: ${props => props.theme.fontMicro};
  color: ${props => props.theme.gray};
`;
