import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const Cover = styled.div`
  letter-spacing: 3px;
  margin-top: 10px;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #b3988e;
`;
const ImageCont = styled.div`
  height: 90%;
  width: 40%;
  background-image: url('https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 10%;
  top: 5%;
  z-index: 2;
  ${mobile({ width: '100%', left: '0', top: '0', height: '100%', zIndex: '1' })}
`;
const DescCon = styled.div`
  height: 95%;
  width: 45%;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  top: 2.5%;
  left: 45%;
  background-color: #e9e9e9;
  ${mobile({ width: '70%', left: '30%' })}
`;
const Desc = styled.div`
  position: absolute;
  left: 28%;
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Jargon = styled.h2`
  color: #303031;
  font-size: 35px;
`;
const ButtonShop = styled.button`
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 10%;
  cursor: pointer;
  border: none;
  font-weight: 700;
  background-color: #e9e9e9;
  text-decoration: underline;
  :hover {
    color: white;
    background-color: black;
  }
  :active {
    transform: scale(1.2);
  }
`;

const Hero = () => {
  return (
    <Cover>
      <ImageCont />
      <DescCon>
        <Desc>
          <Jargon>WATCH OUR RANDOM FILMS HERE</Jargon>
          <div>
            <Link to={`/films/All`}>
              <ButtonShop>VIEW HERE</ButtonShop>
            </Link>
          </div>
        </Desc>
      </DescCon>
    </Cover>
  );
};

export default Hero;
