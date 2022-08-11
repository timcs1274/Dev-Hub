const router = require('express').Router();


router.get("/", (req, res) => {
    res.send("Project route")
}) 

router.get("/:id", (req, res) => {
    res.send("Project id: " + req.params.id)
}) 
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;





