import { Request, Response, NextFunction } from 'express';

export const eMaster = async (req: Request, res: Response, next: NextFunction) => {

  const objectUser = Object(req.user)

  if (req.isAuthenticated() && (objectUser.master == "Sim")) {
    return next();
  }

  req.flash('erro_msg', "Você precisa ser um Master para acessar esta rota.")
  res.redirect('/');
};
