// src/models/Inventaire.ts
import mongoose from 'mongoose';

const inventaireSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  quantite: { type: Number, required: true },
  prix: { type: Number, required: true },
});

export default mongoose.model('Inventaire', inventaireSchema);
