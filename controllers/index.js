const router = require('express').Router();
// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes.js');
// router.use('/api', apiRoutes);
// router.use('/', homeRoutes);
router.get("/", (req, res) => {
    res.send("Works -vince")
}) 
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
