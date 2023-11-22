import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import Funcionario from '../models/funcionario';
import obterProximaMatricula from './obterProximaMatricula';
import verificaIdade from './verificaIdade';


export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    let erros = [];

    // Extrai os dados do corpo da requisição
    const { nome, sobrenome, usuario, dataNasc, senha, funcao, master, confSenha } = req.body;

    // Validação básica dos campos
    if (!nome || !sobrenome || !usuario || !dataNasc || !senha || !funcao || !confSenha) {
      erros.push('Todos os campos são obrigatórios.');
    } else {
      if (nome.length <= 1) {
        erros.push('Nome pequeno.');
      }
      if (sobrenome.length <= 1) {
        erros.push('Sobrenome pequeno.');
      }
      if (verificaIdade(dataNasc) < 18) {
        erros.push('O funcionário necessita ser maior de idade.');
      }
      if (senha != confSenha) {
        erros.push('As senhas não coincidem.');
      }
      if (senha.length < 8) {
        erros.push('Senha curta.');
      }
    }





    // Verificar se o nome de usuário já existe no banco de dados
    const existingUser = await Funcionario.findOne({ usuario: usuario });
    if (existingUser) {
      erros.push('Nome de usuário já existe.')
    }


    if (erros.length > 0) {
      req.flash('erro_msg', erros)
      return res.redirect('/funcionario/cadastro')
    }

    // Gerar um salt para o hash
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash da senha usando o salt
    const hashedPassword = await bcrypt.hash(senha, salt);


    const matricula = await obterProximaMatricula();

    // Criar um novo objeto Funcionario
    const novoFuncionario = new Funcionario({
      nome,
      sobrenome,
      usuario,
      dataNasc,
      matricula,
      senha: hashedPassword,
      funcao,
      master
    });

    // Salvar o novo funcionário no banco de dados
    await novoFuncionario.save();

    req.flash('sucesso_msg', 'Funcionário registrado com sucesso.')
    return res.redirect('/funcionarios');
  } catch (error) {
    // Lidar com erros
    next(error);
  }
};


export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: Error, user: any, info: any) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('erro_msg', 'A autenticação falhou.')
      return res.redirect('/login')
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('sucesso_msg', 'Autenticação completa.')
      return res.redirect('/');
    });
  })(req, res, next);
};


export const logout = (req: Request, res: Response) => {
  req.logout((err: any) => {
    if (err) {
      req.flash('erro_msg', 'Erro durante o logout.')
      return res.redirect('/login')
    }
    req.flash('sucesso_msg', 'Logout bem-sucedido.')
    return res.redirect('/login')
  });
};
