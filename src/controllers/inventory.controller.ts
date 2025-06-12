// src/controllers/inventory.controller.ts
import { Request, Response } from 'express';
import Inventory from '../models/Inventaire';

export const getInventories = async (_req: Request, res: Response) => {
  const items = await Inventory.find();
  res.json(items);
};

export const createInventory = async (req: Request, res: Response) => {
  const newItem = new Inventory(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

// src/controllers/inventory.controller.ts

export const updateInventory = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Inventaire non trouvé' });
      return;
    }
    res.status(200).json(updated); // pas de return ici
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const deleteInventory = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Inventory.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: 'Inventaire non trouvé' });
      return;
    }
    res.status(204).send(); // pas de return ici
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

