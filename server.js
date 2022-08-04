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
// sequelize
//mysql2
//handlebars
//express-session
//connect-session-sequelize
//dotenv 
//bcrypt
