const express = require("express")
const router = express.Router()
const controllers = require("../API-controllers/internalControllers")

//---Paths---


router.get("/product-controller", controllers.get.DOMProductController)
router.get("/product-info", controllers.get.DOMProductInfo)
router.get("/register-form-controller", controllers.get.DOMFormController)

module.exports = router