import { Request, Response, NextFunction } from 'express';

export const CheckAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.json({ message: 'hello' });
    } catch (error) {
        next(error); 
    }
};
