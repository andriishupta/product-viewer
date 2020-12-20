import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Box display='flex' height='100vh' justifyContent='center' alignItems='center'>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h3'>Welcome!</Typography>
        <Typography variant='body1'>This is simple "Product View" Application that allow to show and list products
          fetched from API with look into direct product by id</Typography>
      </Container>
    </Box>
  );
};

export default Home;
