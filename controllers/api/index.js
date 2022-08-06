const router = require('express').Router();

const userRoutes = require('./userRoutes')

router.use('/user', userRoutes)
router.use('/images', userRoutes)

module.exports = router;