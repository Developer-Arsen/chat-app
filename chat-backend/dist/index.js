import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoutes from './routes/AuthRoutes.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use("/api", AuthRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
