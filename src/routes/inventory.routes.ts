// src/routes/inventory.routes.ts
import express from 'express';
import {
  getInventories,
  createInventory,
  updateInventory,
  deleteInventory
} from '../controllers/inventory.controller';

import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

router.get('/', authenticate, getInventories);
router.post('/', authenticate, authorize(['admin']), createInventory);
router.put('/:id', authenticate, authorize(['admin']), updateInventory);
router.delete('/:id', authenticate, authorize(['admin']), deleteInventory);

export default router;
