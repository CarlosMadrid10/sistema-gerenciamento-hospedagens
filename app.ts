import express from 'express';
import * as path from 'path';
import * as hbs from 'hbs';
import route from './routes/routes';
import mongoose from 'mongoose';
import session from 'express-session';
import flash from 'express-flash';
import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import passport from 'passport';
import passportConfig from './config/passportConfig';


//Configurando dotenv
dotenv.config();

//Configurando Express
const app = express();

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))



//Configurando chamadas CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
  next()
})


//Configurando Handlebars (template engine)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('allowProtoProperties', () => {
    return true; 
  });
  
hbs.registerHelper('allowProtoMethods', () => {
  return true; 
});


hbs.registerHelper('eq', function (a, b, options) {
  return a === b ? options.fn(this) : options.inverse(this);
});    
  

app.use(express.static(path.join(__dirname, 'public')));

//Configurando Session
app.use(session({
  secret: String(process.env.SECRET_SESSION),
  resave: true,
  saveUninitialized: true  
}));

//Configuração do Passport
passportConfig()
app.use(passport.initialize());
app.use(passport.session());

// Configurando Flash
app.use(flash());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.sucesso_msg = req.flash('sucesso_msg');
  res.locals.erro_msg = req.flash('erro_msg');
  res.locals.user = req.user || null;
  next();
});


//Importando Rotas
app.use(route)


// Conectar ao banco de dados
const mongooseConnect = String(process.env.MONGOOSE_CONNECT)
mongoose.connect(mongooseConnect);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));

db.once('open', function () {
  console.log('Conexão bem-sucedida com o banco de dados!');
});



app.use((req, res) => {
  res.render('404', {layout: 'layouts/exts'});
});


app.listen(process.env.PORT, () => console.log(`Servidor iniciado.`))
