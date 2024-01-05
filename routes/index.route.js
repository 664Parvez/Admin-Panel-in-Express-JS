const router = require("express").Router()

const home = require("../controllers/index.controller")


router.get("/dashboard", home)


module.exports = router