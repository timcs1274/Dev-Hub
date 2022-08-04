const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class friendsList extends Model {
   //probably have to check password here (login)
    //then return a bcrypted password and compare it with signup info
}

friendsList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      references :{
        //idea behind this would be to connect the friendslist with userid
        model: 'user',
        key: 'id'
      }
    },
  }
);

//sequelize built-in property

module.exports = friendsList;