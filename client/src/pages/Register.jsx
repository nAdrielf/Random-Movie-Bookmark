import React from 'react';
import styled from 'styled-components';
import { Link as ButtonAccount } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  border-radius: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
// const Agreement = styled.div`
//   font-size: 15px;
//   margin: 20px 0;
// `;
const ButtonCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  margin: 20px 0;
  font-size: 15px;
  padding: 10px 20px;
  background: #2222ac;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :active {
    color: black;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          {/* <Agreement>
            By creating an account I agree to process my personal data according
            to <b>Privacy Policy</b>
          </Agreement> */}
          <ButtonCont>
            <Button>CREATE</Button>
            <ButtonAccount
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              to="/login"
            >
              Have An Account ?
            </ButtonAccount>
          </ButtonCont>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
