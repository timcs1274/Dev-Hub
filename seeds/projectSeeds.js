const { project } = require('../models');

const projectSeedData = 

[
  {
    user_id : 1,
    name: "RubyonRails",
    content: "A new scientific dicover suggests that the natural ingredients of honey and Vitamin A,,C, and B6 found in lemon are proven to cure depression!",
    date_created:"August 5th, 2022 16:00"
  },
  {
    user_id : 2,
    name: "Bootstrap and CSS",
    description: "Remember the super popular movie Interstellar? Well.. the whole thing about not aging in space is true. Technically, you could age reall really reallyyy** slow if you traveled at the speed of light",
    date_created:"August 5th, 2022 16:00"
    
  },
  {
    user_id : 3,
    name: "",
    description: "Touching grass is imperative to mental and physical health. Touching grass 5 times a day, keeps depression away!", 
    date_created:"August 5th, 2022 16:00"
  }
]
  
const seedingProject = () => project.bulkCreate(projectSeedData)

module.exports = seedingProject;