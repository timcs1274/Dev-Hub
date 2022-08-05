const { User } = require('../models');

const userSeedData = 
[
    {
      name: "Yuh",
      email: "Yuh@hotmail.com",
      password: "password12"
    },
    {
      name: "LarrytheLobster",
      email: "lobster@gmail.com",
      password: "password12"
    },
    {
      name: "Anika",
      email: "anika@aol.com",
      password: "password12"
    }
  ]

  const seedingUsers = () => User.bulkCreate(userSeedData,{individualHooks: true }) 
  
module.exports = seedingUsers;