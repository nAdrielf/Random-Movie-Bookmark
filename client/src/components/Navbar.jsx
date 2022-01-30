import React from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mobile } from '../responsive';

const Nav = styled.div`
  letter-spacing: 3px;
  ${mobile({ width: '100%' })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  ${mobile({ justifyContent: 'space-around', margin: '0px' })}
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14;
  margin-left: 25px;
  cursor: pointer;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <Nav>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            <Logo>.FILM.</Logo>
          </Link>
        </Left>
        <Center></Center>
        <Right>
          <Link
            to="/bookmark"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <BookmarkBorderIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
