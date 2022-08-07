const router = require('express').Router();

const userRoutes = require('./userRoutes')
const userNewProfile = require('./userNewProfile')

router.use('/user', userRoutes)
router.use('/images', userRoutes)
router.use("/newuser", userNewProfile)

module.exports = router;