const router = require('express').Router();
const { techinterests, Friends, User } = require('../../models');
const cloudinary = require("cloudinary");

router.post('/', (req, res) => {
    console.log(req.body)

    User.create(req.body)
    .then(newUser => {
        console.log(newUser)
        res.json("added a new user")
    })
});


module.exports = router;



