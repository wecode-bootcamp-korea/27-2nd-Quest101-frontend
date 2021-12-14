import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';

const Nav = props => (
  <HeaderContainer>
    <Header>
      <Link to="/">
        <Logo>QUEST101</Logo>
      </Link>
      <TitleClass>클래스</TitleClass>
      <SearchContainer>
        <Input type="search" placeholder="찾으시는 취미가 있으신가요?" />
        <SearchIcon />
      </SearchContainer>
      <Link to="/">
        <DarkMode>다크모드</DarkMode>
      </Link>

      <Link to="/">
        <LogOut>로그아웃</LogOut>
      </Link>
      <Link to="/">
        <Likey />
      </Link>
      <Link to="/">
        <UserImage />
      </Link>
    </Header>

    <CategoryContainer>
      <CategoryWrapper>
        <Link to="/">
          <Category>드로잉</Category>
        </Link>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            <Link to="/">
              <SubCategory>디지털 드로잉</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>드로잉</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>공예</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>요리·음료</SubCategory>
            </Link>
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Link to="/">
          <Category>운동</Category>
        </Link>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            <Link to="/">
              <SubCategory>운동1</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>운동2</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>운동3</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>운동4</SubCategory>
            </Link>
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Link to="/">
          <Category>금융·재테크</Category>
        </Link>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            <Link to="/">
              <SubCategory>금융·재테크1</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>금융·재테크2</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>금융·재테크3</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>금융·재테크4</SubCategory>
            </Link>
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Link to="/">
          <Category>창업·부업</Category>
        </Link>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            <Link to="/">
              <SubCategory>창업·부업1</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>창업·부업2</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>창업·부업3</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>창업·부업4</SubCategory>
            </Link>
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Link to="/">
          <Category>음악</Category>
        </Link>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            <Link to="/">
              <SubCategory>음악1</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>음악2</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>음악3</SubCategory>
            </Link>
            <Link to="/">
              <SubCategory>음악4</SubCategory>
            </Link>
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <Link to="/">
        <Creator>크리에이터 센터</Creator>
      </Link>
    </CategoryContainer>
  </HeaderContainer>
);
export default Nav;

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${props => props.theme.mediumGray};
`;

const Header = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
  width: 1100px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Logo = styled.h1`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.weightBold};
`;

const TitleClass = styled.h2`
  padding-right: 40px;
  color: ${props => props.theme.orange};
  font-size: 20px;
  font-weight: ${props => props.theme.weightBold};
`;

const SearchContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 520px;
  padding: 12px 52px 12px 16px;
  background-color: ${props => props.theme.lightGray};
  line-height: 20px;
  border-radius: 24px;
  text-align: left;
`;

const DarkMode = styled.button`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
`;

const LogOut = styled.button`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: relative;
  top: 8px;
  right: 40px;
  font-size: ${props => props.theme.fontLarge};
`;

const Likey = styled(HiOutlineHeart)`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontLarge};
`;

const UserImage = styled.img.attrs({
  src: '/images/default-user.png',
})`
  width: 36px;
`;

const CategoryContainer = styled.ul`
  position: relative;
  ${props => props.theme.flex('row', 'center', 'flex-start')};
  width: 1100px;
  margin: 0 auto;
  color: black;
  text-decoration: none;
`;

const CategoryWrapper = styled.li`
  color: red;
`;

const Category = styled.button`
  padding: 8px 0 20px 0;
  color: ${props => props.theme.black};
  margin-right: 50px;
  font-size: ${props => props.theme.fontSemiMedium};
  font-weight: ${props => props.theme.weightBold};
`;

const SubCategoryContainer = styled.ul`
  position: relative;
  display: none;
  color: red;
  ${CategoryWrapper}:hover & {
    display: block;
  }
`;

const SubCategoryWrapper = styled.div`
  position: absolute;
  top: 1px;
  left: -30px;
  width: 195px;
  padding: 20px 10px;
  background-color: ${props => props.theme.white};
  border-left: 1px solid ${props => props.theme.mediumGray};
  border-right: 1px solid ${props => props.theme.mediumGray};
  border-bottom: 1px solid ${props => props.theme.mediumGray};
  font-size: ${props => props.theme.fontRegular};
`;

const SubCategory = styled.li`
  padding: 10px 0 10px 20px;
  color: ${props => props.theme.black};
  &:hover {
    background-color: ${props => props.theme.lightGray};
  }
`;

const Creator = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 0 20px 0;
  color: ${props => props.theme.orange};
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightBold};
`;
