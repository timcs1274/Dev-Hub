
const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');
const cloudinary = require("cloudinary");



router.get('/User/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const project = userData.get({ plain: true });
  
      res.render('user', {
        ...project,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/User/:id/Project', async (req, res) => {
    try {
      const projectData = await Project.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const project = projectData.get({ plain: true });
  
      res.render('project', {
        ...project,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



app.post('/api/images', parser.single("image"), (req, res) => {
    console.log(req.file) // to see what is returned to you
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    Image.create(image) // save image information in database
      .then(newImage => res.json(newImage))
      .catch(err => console.log(err));
  });

  