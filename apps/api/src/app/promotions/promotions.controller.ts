import { Router } from 'express';
import { PromotionsService } from './promotions.service';

const router = Router();

router.get('/', (req, res) => {
  res.json(PromotionsService.get());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(PromotionsService.getById(id));
});

export default router;
