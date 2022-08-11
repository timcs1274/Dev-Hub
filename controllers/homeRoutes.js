const router = require('express').Router();
const { project, User, techInterest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
   
    res.render('homepage', {
      
        logged_in: req.session.logged_in
    });
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
        res.render('userpage',{user:req.session.user_id});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;


