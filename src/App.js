import React from 'react';
import { SearchProduct } from 'components/SearchProduct';
import { BrowserRouter, Route} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route path="/app" component={SearchProduct} />  
  </BrowserRouter>
);

export default App;
