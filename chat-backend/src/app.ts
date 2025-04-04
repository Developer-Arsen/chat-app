import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { authRoutes, itemRoutes } from '@routes/index';

const app = express();

app.use(express.json());

app.use('/api/items', itemRoutes);
app.use('/', authRoutes);

app.use(errorHandler);

export default app;
