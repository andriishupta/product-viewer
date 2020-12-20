import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';

import { Message } from '@product-viewer/api-interfaces';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Products = () => {
  const classes = useStyles();
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <React.Fragment>
      <div className={ classes.heroContent }>
        <Container maxWidth='md'>
          <Typography component='h1' variant='h2' color='textPrimary' gutterBottom>
            Products
          </Typography>
          <div className={ classes.heroButtons }>
            <Grid container spacing={ 2 }>
              <Grid item>
                <Button variant='contained' color='primary'>
                  Search
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Vendors
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={ classes.cardGrid } maxWidth='md'>
        <Grid container spacing={ 4 }>
          { cards.map((card) => (
            <Grid item key={ card } xs={ 12 } sm={ 6 } md={ 4 }>
              <Card className={ classes.card }>
                <CardMedia
                  className={ classes.cardMedia }
                  image='https://source.unsplash.com/random'
                  title='Image title'
                />
                <CardContent className={ classes.cardContent }>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    View
                  </Button>
                  <Button size='small' color='primary'>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )) }
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Products;
