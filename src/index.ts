import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import inventoryRoutes from './routes/inventory.routes';
import produitRoutes from './routes/produit.routes';
import categorieRoutes from './routes/categorie.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // ✅ OBLIGATOIRE pour req.body

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/inventories', inventoryRoutes);
app.use('/api/produits', produitRoutes);
app.use('/api/categories', categorieRoutes);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
