const router = require("express").Router()

const {loginform, login} = require("../controllers/login.controller")

router.get("/", loginform)
router.post("/login", login)

module.exports = router