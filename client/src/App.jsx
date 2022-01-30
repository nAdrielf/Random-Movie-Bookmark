import React from 'react';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/films/:category">
          <ProductList />
        </Route>
        <Route path="/film/:id">
          <Product />
        </Route>
        <Route path="/bookmark">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
