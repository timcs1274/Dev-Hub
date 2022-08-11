//join table

const User = require('./User');
const Project = require('./project');
const techInterest = require('./techinterests');
const ProjectUser = require('./projectUser');


User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});
  


module.exports = {
    techInterest,
    Project, 
    User
}



