import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import TopImage from './TopImage/TopImage';
import DetailNav from './DetailNav/DetailNav';
import Creator from './Creator/Creator';
import Community from './Community/Community';
import RightApplication from './RightApplication/RightApplication';
import RefundPolicy from './ RefundPolicy/ RefundPolicy';
import styled from 'styled-components';

const ProductDetail = () => {
  const [comment, setComment] = useState('');
  const [creatorInfo, setCreatorInfo] = useState({});
  const [commentArray, setCommentArray] = useState([]);
  // const params = useParams();

  useEffect(() => {
    fetch('../data/communityData.json')
      .then(res => res.json())
      .then(data => {
        setCommentArray(data);
      });
  }, []);

  useEffect(() => {
    fetch('../data/creatorData.json')
      .then(res => res.json())
      .then(data => {
        setCreatorInfo(data);
      });
  }, []);

  const commentAdditional = e => {
    const { value } = e.target;
    setComment(value);
  };

  const onSubmitUserComment = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }

    setCommentArray(e => [
      ...e,
      {
        id: commentArray[commentArray.length - 1].id + 1,
        name: '물범',
        comment: comment,
      },
    ]);
    setComment('');
  };

  const onRemoveComment = id => {
    setCommentArray(commentArray.filter(user => user.id !== id));
  };

  return (
    <ProductDetailContanier>
      <TopImage image={creatorInfo} />
      <FlexWrap>
        <div className="leftWrap">
          <DetailNav />
          <Creator creatorInfo={creatorInfo} />
          <Community
            commentArray={commentArray}
            comment={comment}
            onSubmitUserComment={onSubmitUserComment}
            onRemoveComment={onRemoveComment}
            commentAdditional={commentAdditional}
          />
          <RefundPolicy />
        </div>
        <div className="rightWrap">
          <RightApplication creatorInfo={creatorInfo} />
        </div>
      </FlexWrap>
    </ProductDetailContanier>
  );
};

const ProductDetailContanier = styled.div`
  width: 1100px;
  margin: ${props => props.theme.marginCenter};
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
`;

export default ProductDetail;
