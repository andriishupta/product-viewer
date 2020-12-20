import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Container, Typography } from '@material-ui/core';

import { Product as ProductInterface } from '@product-viewer/api-interfaces';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  productContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  product: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductInterface>();
  const classes = useStyles();

  useEffect(() => {
    fetch(`/api/products/${ id }`)
      .then((r) => r.json())
      .then((data) => setTimeout(() => setProduct(data), 1000));
  }, []);

  return (
    product
      ? <React.Fragment>
        <div className={ classes.pageContent }>
          <Container maxWidth='md'>
            <Typography component='h1' variant='h2' color='textPrimary' gutterBottom>
              { product.name }
            </Typography>
            <Typography component='h3' variant='subtitle1' color='textPrimary' gutterBottom>
              { product.vendor }
            </Typography>
          </Container>
        </div>

        <Container className={ classes.productContent } maxWidth='md'>
          <video controls width='450'>
            <source
              src={ product.media && product.media[0] && product.media[0].url }
              type='video/mp4'
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </Container>
      </React.Fragment>
      : <Box display='flex' justifyContent='center' marginTop='100px'>
        <CircularProgress />
      </Box>
  );
};

export default Product;
