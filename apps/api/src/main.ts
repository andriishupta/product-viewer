import * as express from 'express';
import { Message } from '@product-viewer/api-interfaces';

import productsController from './app/products/products.controller';
import promotionsController from './app/promotions/promotions.controller';
import vendorsController from './app/vendors/vendors.controller';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.use('/api/products', productsController);
app.use('/api/promotions', promotionsController);
app.use('/api/vendors', vendorsController);

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found!' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Crash!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

process.on('uncaughtException', () => {
  // bye-bye
});
