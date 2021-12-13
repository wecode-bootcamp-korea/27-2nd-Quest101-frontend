import React from 'react';
import styled from 'styled-components';

const DetailNav = () => {
  return (
    <DetailNavContainer>
      <NavListWrap>
        <List>크리에이터</List>
        <List>커뮤니티</List>
        <List>환불정책</List>
      </NavListWrap>
    </DetailNavContainer>
  );
};

const DetailNavContainer = styled.div`
  width: 730px;
`;

const NavListWrap = styled.ul`
  display: flex;
  border-bottom: ${props => props.theme.borderGray};
`;

const List = styled.li`
  padding: 14px 0px 14px;
  margin-right: 24px;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
`;

export default DetailNav;
