import { Request, Response } from 'express';
import Categorie from '../models/Categorie';

export const getCategories = async (_req: Request, res: Response): Promise<void> => {
  try {
    const categories = await Categorie.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const createCategorie = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCategorie = new Categorie(req.body);
    await newCategorie.save();
    res.status(201).json(newCategorie);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const updateCategorie = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Catégorie non trouvée' });
      return;
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const deleteCategorie = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Categorie.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: 'Catégorie non trouvée' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
