import React from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mobile } from '../responsive';

const Nav = styled.div`
  letter-spacing: 3px;
  height: 9vh;
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
const Left = styled.div``;

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
  flex: 2;
  display: flex;
  justify-content: space-between;
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
          <Logo>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              .FILM.
            </Link>
          </Logo>
        </Left>
        <Center></Center>
        <Right>
          <Link
            to={`/films/All`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            VIEW ALL
          </Link>
          <Link
            to={`/films/TV SERIES`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            TV SERIES
          </Link>
          <Link
            to={`/films/MOVIES`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            MOVIES
          </Link>
          <Link
            to={`/films/DOCUMENTARIES`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            DOCUMENTARIES
          </Link>
          <MenuItem>
            <Link
              to="/bookmark"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Badge badgeContent={quantity} color="primary">
                <BookmarkBorderIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
