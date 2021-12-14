import React from 'react';
import styled from 'styled-components';
const LikeButton = ({ icon }) => {
  return (
    <LikeButtonContainer>
      <p>{icon}</p>
    </LikeButtonContainer>
  );
};
export default LikeButton;
const LikeButtonContainer = styled.div`
  color: ${props => props.theme.white};
`;
