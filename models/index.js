//join table

const User = require('./User');
const project = require('./Project');
const friendsList = require('./friendsList');
const techInterest = require('./techinterest');





//Users
//User hasMany projects
//User haveMany techInterests
//Users HasMany (users) - through a join friends table

//techinterests
//techinterests BelongsToMany Users


//Projects hasMany Collaborators (users) through a join table but which one?
//Projects BelongsTo users
//


//userproject join table - how Im joining them 


// users are the collaborators
//collabs can go through many to many join table
//one user can have many proj but can only have one owner


//how to do a many to many on one table


//modelf for user, project, tech interest, seed.js

//12:15 to 

























//why isns't this and const for it lighting up?
module.exports = techInterest;



