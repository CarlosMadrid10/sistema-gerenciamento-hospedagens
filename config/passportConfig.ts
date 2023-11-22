import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import Funcionario from '../models/funcionario';
import passport from 'passport';

const passportConfig = () => {
  passport.use(
    new LocalStrategy({ usernameField: 'usuario', passwordField: 'senha' }, async (usuario, senha, done) => {
      try {
        const funcionario = await Funcionario.findOne({ usuario: usuario });
  
        if (!funcionario) {
          return done(null, false, { message: 'Usuario incorreto.' });
        }
  
        const senhaCorreta = await bcrypt.compare(senha, String(funcionario.senha));
  
        if (senhaCorreta) {
          return done(null, funcionario);
        } else {
          return done(null, false, { message: 'Senha incorreta.' });
        }
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((funcionario: any, done) => {
    done(null, funcionario.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const funcionario = await Funcionario.findById(id);
      done(null, funcionario);
    } catch (error) {
      done(error);
    }
  });
};

export default passportConfig;
