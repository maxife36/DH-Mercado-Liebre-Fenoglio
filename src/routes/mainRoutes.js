const express = require("express")
const router = express.Router()
const path = require("path")
const controllers = require("../API-controllers/mainControllers")

/* ------GET----- */

router.get("/", controllers.get.home)
router.get("/register", controllers.get.register)
router.get("/login", controllers.get.login)

/* ------POST----- */

router.post("/register-form",controllers.post.registerForm )
router.post("/login-form",controllers.post.loginForm ) 


module.exports = router