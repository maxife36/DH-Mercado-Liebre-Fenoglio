const path = require("path")

const pathProductController = path.resolve("src", "DOM-controllers", "product-controller.js") 
const pathRegisterFormController = path.resolve("src", "DOM-controllers", "register-form-controller.js")
const pathProductInfo = path.resolve("src", "Temporary-DB", "productos-Prueba.js") 

module.exports = {
    get: {
       DOMProductController : (req,res) => res.sendFile(pathProductController),
       DOMProductInfo : (req,res) => res.sendFile(pathProductInfo),
       DOMFormController : (req,res) => res.sendFile(pathRegisterFormController)
    }
}