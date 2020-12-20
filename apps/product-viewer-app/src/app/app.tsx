import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

import { Product, Products } from './product';
import Home from './Home';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <nav className='app-nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/products' exact component={ Products } />
          <Route path='/products/:id' exact component={ Product } />
          <Redirect from="*" to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
