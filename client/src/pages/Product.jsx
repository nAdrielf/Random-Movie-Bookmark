import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethode';
import { useDispatch } from 'react-redux';
import { addFilm } from '../redux/cartmarkRedux';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
  height: 90vh;
  ${mobile({ width: '100vw' })}
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 100px;
  ${mobile({ padding: '0', margin: '0 10px', display: 'block' })}
  ${tablet({ width: '100%', margin: '30px 0px', padding: '0' })}
`;
const ImageCont = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${mobile({ height: '50vh', width: '95vw', marginRight: '50px' })}
`;
const Image = styled.img`
  height: 90vh;
  width: 90%;
  ${mobile({ width: '100%', height: '100%' })}
`;
const DescCont = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
`;
const Desc = styled.p`
  margin: 20px 0;
  letter-spacing: 1px;
`;

const Crew = styled.p`
  margin-bottom: 10px;
`;
const Runtime = styled.span`
  margin-bottom: 10px;
`;

const AddCont = styled.div`
  margin: 60px 0;
  width: 55%;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  border-color: #1f1fcf;
  background-color: white;
  color: black;
  font-weight: 500;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    color: white;
    font-weight: 500;
    background-color: #1f1fcf;
  }
  :active {
    color: #000;
    font-weight: 500;
  }
  ${mobile({ marginBottom: '20px', marginLeft: '55px', padding: '15px' })}
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [quantity] = useState(1);
  const [film, setFilm] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getFilm = async () => {
      try {
        const res = await publicRequest.get('/films/find/' + id);
        setFilm(res.data);
      } catch {}
    };
    getFilm();
  }, [id]);
  const handleClick = () => {
    dispatch(addFilm({ film, quantity }));
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageCont>
          <Image src={film.img} />
        </ImageCont>
        <DescCont>
          <Title>{film.title}</Title>
          <Desc>{film.desc}</Desc>
          <Crew>Cast: {film.crew}</Crew>
          <Runtime>Runtime: {film.runtime}</Runtime>
          <AddCont>
            <Button onClick={handleClick}>ADD TO BOOKMARK</Button>
          </AddCont>
        </DescCont>
      </Wrapper>
    </Container>
  );
};

export default Product;
