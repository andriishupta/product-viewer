import { Router } from 'express';
import { VendorsService } from './vendors.service';

const router = Router();

router.get('/', (req, res) => {
  res.json(VendorsService.get());
});

export default router;
