import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #f8eeea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  color: #696565;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 20px;
`;
const InputCont = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid lightgrey;
`;
const Input = styled.input`
  border: none;
  flex: 15;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #377c7c;
  color: white;
  cursor: pointer;
  :active {
    color: black;
  }
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>Get timely update on our product</Desc>
      <InputCont>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputCont>
    </Container>
  );
};

export default NewsLetter;
