import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import {
  getProduits,
  createProduit,
  updateProduit,
  deleteProduit
} from '../controllers/produit.controller';

const router = express.Router();

// ✅ Liste de tous les produits
router.get('/', authenticate, getProduits);

// ✅ Ajouter un produit (admin seulement)
router.post('/', authenticate, authorize(['admin']), createProduit);

// ✅ Modifier un produit (admin seulement)
router.put('/:id', authenticate, authorize(['admin']), updateProduit);

// ✅ Supprimer un produit (admin seulement)
router.delete('/:id', authenticate, authorize(['admin']), deleteProduit);

export default router;
