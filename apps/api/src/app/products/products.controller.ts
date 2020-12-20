import { Router } from 'express';
import { ProductsService } from './products.service';

const router = Router();

// todo: add caching with Redis.
router.get('/', (req, res) => {
  res.json(ProductsService.get());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const product = ProductsService.getById(id);

  return product
    ? res.json(product)
    : res.status(404).json();
});

export default router;
