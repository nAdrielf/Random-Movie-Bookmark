import React from 'react';
import Hero from '../components/Cover';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
