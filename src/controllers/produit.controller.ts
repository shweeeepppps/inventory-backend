import { Request, Response } from 'express';
import Produit from '../models/Produit';

export const getProduits = async (_req: Request, res: Response) => {
  const produits = await Produit.find().populate('categorie');
  res.json(produits);
};

export const createProduit = async (req: Request, res: Response) => {
  try {
    const produit = new Produit(req.body);
    await produit.save();
    res.status(201).json(produit);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const updateProduit = async (req: Request, res: Response) => {
  try {
    const updated = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Produit non trouvé' });
      return;
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const deleteProduit = async (req: Request, res: Response) => {
  try {
    const deleted = await Produit.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: 'Produit non trouvé' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
