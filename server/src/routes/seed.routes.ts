import { Router } from 'express';
import { seedProducts } from '../controllers/seed.controllers';

const router = Router();

router.get('/products/seed', seedProducts);

export default router;
