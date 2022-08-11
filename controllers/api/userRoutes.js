const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async(req, res) => {
    try {
        const userData = await User.create(req.body);


        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


//post route to create user's login
router.post('/login', async (req, res) => {
    console.log('i work',req.body)
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (req.body.email === "" || !userData) {
            console.log("invalid email or password")
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
        console.log(req.session)

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


module.exports = router;