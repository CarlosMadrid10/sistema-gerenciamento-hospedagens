import { Request, Response, NextFunction } from 'express';

export const eAdmin = (req: Request, res: Response, next: NextFunction) => {

  
  if (req.isAuthenticated()) {
    return next();
  }

  
  res.redirect('/login');
};
