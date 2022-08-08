// const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');
// // const cloudinary = require("cloudinary");



// router.get('/User/:id', async(req, res) => {

//     try {
//         const userData = await User.findByPk(req.params.id, {
//             include: [{
//                 model: User,
//                 attributes: ['name'],
//             }, ],
//         });

//         const project = userData.get({ plain: true });

//         res.render('user', {
//             ...project,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/User/:id/Project', async(req, res) => {
//     try {
//         const projectData = await Project.findByPk(req.params.id, {
//             include: [{
//                 model: User,
//                 attributes: ['name'],
//             }, ],
//         });

//         const project = projectData.get({ plain: true });

//         res.render('project', {
//             ...project,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

