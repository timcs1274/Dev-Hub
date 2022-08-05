const sequelize = require('../config/connection');

const seedingUsers = require('./userseeds');
const seedingPost = require('./postseeds');
const seedingComment = require('./commentseeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedingUsers();
  console.log("users seeded");

  await seedingTechInterest();
  console.log("techInterest seeded");

  await seedingProject();
  console.log("projects seeded");

  process.exit(0);
};seed
seedDatabase();