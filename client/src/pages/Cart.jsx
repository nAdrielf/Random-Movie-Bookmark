import styled from 'styled-components';
import Navbar from '../components/Navbar';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFilm } from '../redux/cartmarkRedux';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ width: '100vw', padding: '0' })}
`;

const Title = styled.h1`
  font-weight: 900;
  text-align: center;
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexWrap: 'wrap', flexDirection: 'column' })}
`;
const Info = styled.div`
  margin: 0 70px;
  flex: 3;
  ${mobile({ flex: '1' })}
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexWrap: 'wrap', flexDirection: 'column' })}
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const Detail = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span`
  ${mobile({ display: 'none' })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Line = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const Remove = () => {
    dispatch(removeFilm());
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Bookmark</Title>
        <Bottom>
          <Info>
            {cart.films.map((film) => (
              <Product>
                <ProductDetail>
                  <Image src={film.img} />
                  <Detail>
                    <ProductName>
                      <b>Title:</b> {film.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {film._id}
                    </ProductId>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountCont>
                    <Button onClick={Remove}>
                      <DeleteOutlineIcon />
                    </Button>
                  </ProductAmountCont>
                </PriceDetail>
              </Product>
            ))}
            <Line />
          </Info>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
