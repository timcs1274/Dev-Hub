const router = require('express').Router();
const { User } = require('../../models'); //dont understand 



//post route to create user's login
router.post('/login', async(req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});
//post routes for login 
//within the post route to login - check if the email and password are valid (checkpassword)
//logout post route (destroy)


app.post('/api/images', parser.single("image"), (req, res) => {
    console.log(req.file) // to see what is returned to you
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    Image.create(image) // save image information in database
      .then(newImage => res.json(newImage))
      .catch(err => console.log(err));
  });

module.exports = router;