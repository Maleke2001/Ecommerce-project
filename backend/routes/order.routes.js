import express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/order.controller.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/orders
router.post('/', protect, createOrder);

// GET /api/orders/myorders
router.get('/myorders', protect, getMyOrders);

// GET /api/orders/:id
router.get('/:id', protect, getOrderById);

// PUT /api/orders/:id/pay
router.put('/:id/pay', protect, updateOrderToPaid);

// PUT /api/orders/:id/deliver
router.put('/:id/deliver', protect, updateOrderToDelivered);

// GET /api/orders (admin route)
router.get('/', protect, getOrders);

export default router;
