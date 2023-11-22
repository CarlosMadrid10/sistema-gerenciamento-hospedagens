import { IUser } from './models/funcionario';

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;
  }
}
