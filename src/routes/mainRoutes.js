const express = require("express")
const router = express.Router()
const path = require("path")

/* ------GET----- */

router.get("/", (req,res) => res.render("home.ejs"))
router.get("/register", (req,res) => res.render("register.ejs"))
router.get("/login", (req,res) => res.render("login.ejs"))

/* ------POST----- */

/* router.post("/register-form", (req,res) => {
    try {
        const data = req.body
        
    } catch (error) {
        
    }
})
router.post("/login-form", (req,res) => {
    try {
        const data = req.body
        
    } catch (error) {
        
    }
}) */


module.exports = router