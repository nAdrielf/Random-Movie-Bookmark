import styled from 'styled-components';
import React from 'react';
import { categories } from '../fdata';
import { Link } from 'react-router-dom';

const Container = styled.div`
  letter-spacing: 3px;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf6f6;
  position: relative;
`;
const Card = styled.div`
  height: 70vh;
  flex: 1;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  position: relative;
  :hover {
    opacity: 80%;
    transition: 0.3s ease;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Title = styled.h3`
  color: white;
  font-size: 35px;
`;
const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 10%;
  cursor: pointer;
  border: none;
  font-weight: 700;
  background: #fcf6f6;
  :hover {
    color: white;
    background-color: black;
  }
  :active {
    transform: scale(1.2);
  }
`;

const Info = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Link to={`/films/${item.cat}`}>
          <Card>
            <Image src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <div>
                <Button>VIEW HERE</Button>
              </div>
            </Info>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default Category;
