import React from 'react';
import { BrowserRouter, Link as RouterLink, Redirect, Route, Switch } from 'react-router-dom';

import { AppBar, CssBaseline, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Product, Products } from './product';
import Home from './Home';

const useStyles = makeStyles((theme) => ({
  links: {
    marginRight: theme.spacing(2)
  }
}));

export const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className='app'>
        <header>
          <AppBar position='relative' color='transparent'>
            <Toolbar>
              <Link to='/' component={ RouterLink } className={ classes.links }>
                <Typography variant='h6' color='inherit'>Home</Typography>
              </Link>
              <Link to='/products' component={ RouterLink } className={ classes.links }>
                <Typography variant='h6' color='inherit'>Products</Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </header>

        <main>
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/products' exact component={ Products } />
            <Route path='/products/:id' exact component={ Product } />
            <Redirect from='*' to='/' />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
