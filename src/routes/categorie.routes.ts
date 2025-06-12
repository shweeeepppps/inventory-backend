import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import {
  getCategories,
  createCategorie,
  updateCategorie,
  deleteCategorie
} from '../controllers/categorie.controller';

const router = express.Router();
router.get('/', authenticate, getCategories);
router.post('/', authenticate, authorize(['admin']), createCategorie);
router.put('/:id', authenticate, authorize(['admin']), updateCategorie);
router.delete('/:id', authenticate, authorize(['admin']), deleteCategorie);
export default router;