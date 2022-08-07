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
router.get("/thisisdog", (req, res) => {
    res.render("dog")
})



module.exports = router;