const router = require('express').Router();
const { project, User, techInterest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    try {
        const projectData = await project.findAll({
            include: [{
                model: User,
                attributes: ['name'],
            }, ],
        });
        // Serialize data so the template can read it
        const projects = projectData.map((project) => project.get({ plain: true }));

        //const user_id = req.session.user_id

        // Pass serialized data and session flag into template
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async(req, res) => {
    try {

        // Pass serialized data and session flag into template
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async(req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

//setting user home route
router.get('/user', async(req, res) =>{
    try {
        res.render('userpage');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;



// router.get('/profile', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Project }],
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('profile', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });