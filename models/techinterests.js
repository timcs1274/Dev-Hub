const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class techInterest extends Model {
    //probably have to check password here (login)
    //then return a bcrypted password and compare it with signup info
}

techInterest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        technologies: {
            type: DataTypes.STRING,
            allowNull: false,
            references : {
                model: 'user',
                key: 'id'
            }
        },

    },
);

//sequelize built-in property

module.exports = techInterest;