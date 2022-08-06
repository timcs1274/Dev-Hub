const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const userRoutes = require ('./api/userRoutes')

const projectRoutes = require('./projectRoutes');


router.use('/projects', projectRoutes)
router.use('/api', apiRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;