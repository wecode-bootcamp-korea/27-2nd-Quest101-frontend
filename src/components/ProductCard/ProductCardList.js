import React from 'react';
import ProductCardItem from './ProductCardItem';

const ProductCardList = props => {
  const { productCardList } = props;

  return (
    <>
      {productCardList.map(productCardInfo => (
        <ProductCardItem
          key={productCardInfo.id}
          productCardInfo={productCardInfo}
        />
      ))}
    </>
  );
};

export default ProductCardList;
