import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

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

export default DetailNav;

const DetailNavContainer = styled.div`
  width: 730px;
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-direction: row;
  border-bottom: ${theme.borderGray};
`;

const List = styled.li`
  padding: 14px 0px 14px;
  margin-right: 24px;
  color: ${theme.gray};
  font-size: ${theme.fontRegular};
`;
