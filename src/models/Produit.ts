import mongoose from 'mongoose';

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie', required: true },
  prix: { type: Number, required: true },
  stock: { type: Number, required: true }
});

export default mongoose.model('Produit', produitSchema);
export interface Categorie {
  _id: string;
  nom: string;
}

export interface Produit {
  _id?: string;
  nom: string;
  prix: number;
  stock: number;
  categorie: Categorie; // pas string !
}
