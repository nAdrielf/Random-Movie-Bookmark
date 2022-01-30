import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';

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
  width: 25%;
  background-color: white;
  border-radius: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 100%;
  font-size: 15px;
  padding: 10px 20px;
  background: #2222ac;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 0 10px 0;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  :active {
    color: black;
  }
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleCLick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username or email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/" style={{ width: '100%' }}>
            <Button onClick={handleCLick} disabled={isFetching}>
              LOGIN
            </Button>
          </Link>
          {error && <Error>Something went wrong...</Error>}
          <Link style={{ textAlign: 'center', color: 'black' }} to="/register">
            Register
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
