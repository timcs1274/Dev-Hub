//join table

const User = require('./User');
const project = require('./Project');
const techInterest = require('./techinterests');


//userproject join table - how Im joining them 
// users are the collaborators
//collabs can go through many to many join table
//one user can have many proj but can only have one owner

//User hasMany projects
User.hasMany(project, {
    foreignKey: 'project_id', //is this correct?
    // unique: false
    // as: 'products'
  });
  
 //User haveMany techInterests
  User.hasMany(techInterest, {
    foreignKey: 'user_id', //is this foreign key correct? confused about foreign keys?
    onDelete: "CASCADE"
  });
  
  //Users HasMany (users) - through a join friends table
  User.belongsToMany(User, {
  
    through: {
      model: User, //should I be creating a User/friends table then? user belongs to many user makes no sense + through user makes no sense
      unique: false
    },
    foreignKey: 'user_id',
  })

  //techinterests

//techinterests BelongsToMany Users
  techInterest.belongsToMany(User, {
  
    through: {
      model: User, //dont think this is correct
      unique: false
    },
    foreignKey: 'user_id',
  })

  //Projects hasMany Collaborators (users) through a join table but which one?
  project.hasMany(User, {
    through: {
      model: User,
  
      unique: false
    },
    foreignKey: 'tag_id'
  });

  //Projects BelongsTo users
  project.belongsTo(User, {
    foreignKey: 'user_id'
  })
  
module.exports = {
    techInterest,
    project, 
    User
}



