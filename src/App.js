import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductBox } from './components/ProductBox';
import { SearchProduct } from './components/SearchProduct';
import { GetProduct } from './components/GetProduct ';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProductBox} />
      <Route exact path="/item/search/:searchParam" component={SearchProduct} />
      <Route exact path="/item/:idProduct" component={GetProduct} />
    </Switch>
  </BrowserRouter>
);

export default App;
