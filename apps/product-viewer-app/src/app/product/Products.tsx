import React, { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';

import { Product, Promotion } from '@product-viewer/api-interfaces';
import { useDebounce } from '../hooks';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  pageActions: {
    marginTop: theme.spacing(4)
  },
  productGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  product: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  promo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productMedia: {
    paddingTop: '56.25%' // 16:9
  },
  productContent: {
    flexGrow: 1
  }
}));

const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>([]);
  const [promo, setPromo] = useState<Promotion>();
  const [vendors, setVendors] = useState<string[]>([]);
  const [activeVendor, setActiveVendor] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(search, 500);


  useEffect(() => {
    // todo someday: simplify with some QueryParams lib
    const vendorQ = activeVendor ? `?vendor=${ activeVendor }` : '';
    const searchQ = search ? `${ vendorQ ? '&' : '?' }search=${ search }` : '';

    setProducts([]);
    setLoading(true);

    fetch('/api/products' + vendorQ + searchQ)
      .then((r) => r.json())
      .then(setProducts)
      .finally(() => setLoading(false)); // emit loading and show spinner
  }, [activeVendor, debouncedSearchTerm]);

  useEffect(() => {
    fetch('/api/promotions/somePromoId')
      .then((r) => r.json())
      .then((data) => setTimeout(() => setPromo(data), 1500)) // emit promo loading later
      .catch(() => console.log('3rd party service failed, but we still showing our list'));
  }, []);

  useEffect(() => {
    fetch('/api/vendors')
      .then((r) => r.json())
      .then(setVendors); // emit loading and show spinner
  }, []);

  const handleVendorChange = useCallback((event) => {
    setActiveVendor(event.target.value as string);
  }, []);

  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value as string);
  }, []);

  return (
    <React.Fragment>
      <div className={ classes.pageContent }>
        <Container maxWidth='md'>
          <Typography component='h1' variant='h2' color='textPrimary' gutterBottom>
            Products
          </Typography>
          <div className={ classes.pageActions }>
            <Grid container spacing={ 2 }>
              <Grid item>
                <TextField id='search' label='Search' value={ search } onChange={ handleSearchChange } />
              </Grid>
              { !!vendors.length && <Grid item>
                <InputLabel id='vendors-select-label'>Vendors</InputLabel>
                <Select
                  style={ { width: '200px' } }
                  labelId='vendors-select-label'
                  id='vendors-select'
                  value={ activeVendor }
                  onChange={ handleVendorChange }
                >
                  <MenuItem value=''>All</MenuItem>
                  { vendors.map(vendor => <MenuItem key={ vendor } value={ vendor }>{ vendor }</MenuItem>) }
                </Select>
              </Grid> }
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={ classes.productGrid } maxWidth='md'>
        { products.length
          ? <Grid container spacing={ 4 }>
            { products.map((product, index) => (
              <>
                { promo && promo.order === index && <Grid item key='promo' xs={ 12 } sm={ 6 } md={ 4 }>
                  <Card className={ classes.product }>
                    <CardContent className={ clsx(classes.productContent, classes.promo) }>
                      <Typography gutterBottom variant='h5' component='h2'>
                        { promo.text }
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid> }
                <Grid item key={ product.id } xs={ 12 } sm={ 6 } md={ 4 }>
                  <Card className={ classes.product }>
                    <LazyLoad height={ 300 } offset={ 100 }>
                      <CardMedia
                        className={ classes.productMedia }
                        image={ product.media && product.media[1] && product.media[1].url }
                        title={ product.name }
                      />
                    </LazyLoad>
                    <CardContent className={ classes.productContent }>
                      <Typography gutterBottom variant='h5' component='h2'>
                        { product.name }
                      </Typography>
                      <Typography>
                        { product.vendor }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={ `/products/${ product.id }` } component={ RouterLink }>
                        <Button size='small' color='primary'>
                          View
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            )) }
          </Grid>
          : <Box display='flex' justifyContent='center'>
            { loading ? <CircularProgress /> : 'No results' }
          </Box>
        }
      </Container>
    </React.Fragment>
  );
};

export default Products;
