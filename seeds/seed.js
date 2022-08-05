const sequelize = require('../config/connection');

const seedingUsers = require('./userseeds');
const seedingTechInterest = require('./postseeds');
const seedingProject = require('./commentseeds');

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