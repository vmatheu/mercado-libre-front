import React from 'react';
import { ProducBoxLink } from './components/ProductBox';
import { SearchProduct } from './components/SearchProduct';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProducBoxLink} />
      <Route path="/item/search/:searchParam" component={SearchProduct} /> 
    </Switch>
  </BrowserRouter>
);

export default App;
