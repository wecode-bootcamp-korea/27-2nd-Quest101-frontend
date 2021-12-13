import React from 'react';
import styled from 'styled-components';

const Creator = ({ creatorInfo }) => {
  const { name, instagram, description, profile } = creatorInfo;
  return (
    <CreatorContainer>
      <CreatorWrap>
        <div>
          <CreatorName>크리에이터</CreatorName>
          {!!name && (
            <CreatorName>
              <CreatorNameBold>{name}</CreatorNameBold>
              입니다.
            </CreatorName>
          )}
        </div>
        <div>{profile && <CreatorProfile src={profile} />}</div>
      </CreatorWrap>
      {instagram && <CreatorInstagram>{instagram}</CreatorInstagram>}
      <MiddleLine />
      {description && <CreatorDescription>{description}</CreatorDescription>}
      <MiddleLine />
    </CreatorContainer>
  );
};

const CreatorContainer = styled.div`
  width: 730px;
`;

const CreatorWrap = styled.div`
  ${props => props.theme.flex('row', 'flex-start', 'space-between')};
  margin-top: 40px;
`;

const CreatorName = styled.h3`
  font-size: ${props => props.theme.fontLarge};
  line-height: 30px;
`;

const CreatorNameBold = styled.span`
  font-weight: ${props => props.theme.weightBold};
`;

const CreatorProfile = styled.img.attrs({
  alt: '프로필',
})`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const CreatorInstagram = styled.p`
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightBold};
`;

const MiddleLine = styled.div`
  margin: 20px 0;
  border: 1px solid ${props => props.theme.lightGray};
`;

const CreatorDescription = styled.p`
  margin: 30px 0;
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 24px;
`;

export default Creator;
