import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const TopImage = () => {
  return (
    <TopImageWrap>
      <Image
        src="https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="메인"
      />
    </TopImageWrap>
  );
};

export default TopImage;

const TopImageWrap = styled.div`
  width: 100%;
  margin: ${theme.marginCenter};
`;

const Image = styled.img`
  height: 519px;
`;
