const express = require("express")
const router = express.Router()
const path = require("path")

//---Paths---

const pathProductController = path.resolve("src", "DOM-controllers", "product-controller.js") 
const pathRegisterFormController = path.resolve("src", "DOM-controllers", "register-form-controller.js")
const pathProductInfo = path.resolve("src", "Temporary-DB", "productos-Prueba.js") 

router.get("/product-controller", (req,res) => res.sendFile(pathProductController))
router.get("/product-info", (req,res) => res.sendFile(pathProductInfo))
router.get("/register-form-controller", (req,res) => res.sendFile(pathRegisterFormController))

module.exports = router