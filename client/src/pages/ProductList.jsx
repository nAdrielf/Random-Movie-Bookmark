import styled from 'styled-components';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { mobile, tablet } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 20px;
  margin-left: 170px;
  ${mobile({ marginTop: '10px' })}
  ${tablet({ marginLeft: '80px' })}
`;
const FilterCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 150px;
  padding-bottom: 30px;
  ${mobile({ margin: '0 40px', width: '100%', height: '100%' })}
  ${tablet({ marginLeft: '60px' })}
`;
const Filter = styled.div`
  margin: 20px;
  margin-bottom: 0;
`;
const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
`;
const Select = styled.select`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 300;
  padding: 10px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilter] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Title>{category}</Title>
      <FilterCont>
        <Filter>
          <FilterText>Filter Films:</FilterText>
          <Select name="genre" onChange={handleFilters}>
            <Option disabled>Genre</Option>
            <Option>Adventure</Option>
            <Option>Fantasy</Option>
            <Option>Horror</Option>
            <Option>Action</Option>
            <Option>Comedy</Option>
            <Option>Drama</Option>
            <Option>Musical</Option>
            <Option>History</Option>
            <Option>All</Option>
          </Select>
        </Filter>
      </FilterCont>
      <Products category={category} filters={filters} />
    </Container>
  );
};

export default ProductList;
