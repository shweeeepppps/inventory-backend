import mongoose from 'mongoose';

const inventaireSchema = new mongoose.Schema({
  codeArticle: { type: String, required: true, unique: true },
  designation: { type: String, required: true },
  palette: { type: Number, required: true },
  casier: { type: Number, required: true },
  unite: { type: Number, required: true },
  total: { type: Number, required: true },
  imageUrl: { type: String }, // ✅ ajoute ceci
});

export default mongoose.model('Inventaire', inventaireSchema);
