import React from 'react';
// import { useParams } from 'react-router-dom';
import TopImage from './TopImage/TopImage';
import DetailNav from './DetailNav/DetailNav';
import RightApplication from './RightApplication/RightApplication';
import theme from '../../styles/theme';
import styled from 'styled-components';

const ProductDetail = props => {
  //   const params = useParams();
  return (
    <ProductDetailContanier>
      <TopImage />
      <BaseLine>
        <DetailNav />
        <RightApplication />
      </BaseLine>
    </ProductDetailContanier>
  );
};

export default ProductDetail;

const ProductDetailContanier = styled.div`
  width: 1100px;
  margin: ${theme.marginCenter};
`;

const BaseLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
`;
