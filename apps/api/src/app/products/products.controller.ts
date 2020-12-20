import { Router } from 'express';
import { ProductsService } from './products.service';
import { cache } from '../../cache';

const router = Router();

router.get(
  '/',
  cache(5 * 60, (req) => !req.query.search && !req.query.vendor),
  (req, res) => {
  setTimeout(() => res.json(ProductsService.get(req.query as { vendor: string, search: string })), 5000);
});

// cache all the time
router.get('/:id', cache(5 * 60), (req, res) => {
  const id = req.params.id;
  const product = ProductsService.getById(id);

  return product
    ? res.json(product)
    : res.status(404).json();
});

export default router;
