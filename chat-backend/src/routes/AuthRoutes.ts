import { Router } from 'express';

const authRoutes = Router();

authRoutes.get('/', (req, res, next) => {
  res.json('hello');
});

export default authRoutes;
