// const UsersignUp = require('');

module.exports = app => {

    app.post('/sign-up', (req, res) => {
      const user = new User(req.body);
  
      user
        .save()
        .then(() => res.redirect('/'))
        .catch((err) => {
          console.log(err.message);
        });
    });
  };