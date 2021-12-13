import React from 'react';
import styled from 'styled-components';

const TopImage = ({ image }) => {
  return (
    <TopImageWrap>
      <Image src={image.topimage} />
    </TopImageWrap>
  );
};

export default TopImage;

const TopImageWrap = styled.div`
  width: 100%;
  margin: ${props => props.theme.marginCenter};
`;

const Image = styled.img.attrs({
  alt: '메인',
})`
  height: 519px;
`;
