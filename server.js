const express = require('express');
const routes = require('controllers');
const sequelize = require('./config/connection');
const mysql = require('mysql2');
const expressHB = require('express-handlebars');
const bcrypt = require('bcrypt');
const session = require('express-session')
const expressHB = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();


// handlebars
//npm library session
//sequelize
//


//packages to download: 
//eslint
//express
//sequelize
//mysql2
//handlebars
//express-session
//connect-session-sequelize
//dotenv 
//bcrypt

//initializing express and writing down the port number to listen to + 
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sess));
  
  // Inform Express.js on which template engine to use
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(routes);
  
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });