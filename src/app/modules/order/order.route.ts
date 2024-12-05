import { Router } from 'express';
import { OrderController } from './order.controller';

const router = Router();

const API_PREFIX = '/api/orders';

router.post(API_PREFIX, OrderController.createOrder);
router.get(`${API_PREFIX}/revenue`, OrderController.getRevenue);

export default router;
