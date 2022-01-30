import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { publicRequest } from '../requestMethode';

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 30px 0;
`;
const Title = styled.h1``;
const Container = styled.div`
  height: 90%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  ${mobile({
    display: 'block',
    width: '100vw',
    alignItems: 'flex-start',
  })}
`;
const Product = styled.div`
  height: 50%;
  width: 20%;
  position: relative;
  margin: 2px;
  ${mobile({ width: '90vw', left: '20px', height: '60%' })}
`;
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e9e9e9;
  position: absolute;
  top: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 75%;
    transition: 0.35s ease;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Icons = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
`;
const Search = styled.button`
  height: 40px;
  width: 40px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50px;
  background: white;
  :hover {
    color: white;
    background-color: black;
  }
  :active {
    transform: scale(1.2);
  }
`;

const Products = ({ category, filters }) => {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await publicRequest.get(
          category ? `/films?category={category}` : '/films'
        );
        setFilms(res.data);
      } catch (err) {}
    };
    getFilms();
  }, [category]);
  useEffect(() => {
    category &&
      setFilteredFilms(
        films.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [films, category, filters]);
  return (
    <Wrap>
      <Title>Our Collections</Title>
      <Container>
        {category
          ? filteredFilms.map((item) => (
              <Product item={item} key={item._id}>
                <Image src={item.img} />
                <Overlay>
                  <Icons>
                    <Search>
                      <Link
                        to={`/film/${item._id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <SearchOutlinedIcon />
                      </Link>
                    </Search>
                  </Icons>
                </Overlay>
              </Product>
            ))
          : films.slice(0, 8).map((item) => (
              <Product item={item} key={item._id}>
                <Image src={item.img} />
                <Overlay>
                  <Icons>
                    <Search>
                      <Link
                        to={`/film/${item._id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <SearchOutlinedIcon />
                      </Link>
                    </Search>
                  </Icons>
                </Overlay>
              </Product>
            ))}
      </Container>
    </Wrap>
  );
};

export default Products;
