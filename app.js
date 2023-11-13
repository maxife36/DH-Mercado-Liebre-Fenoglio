const express = require("express")
const path = require("path")

const app = express()

const pathPublic = path.resolve("public")

console.log(pathPublic);

app.use(express.static(pathPublic))

const PORT = process.env.PORT || 3000

//---Paths---

const pathIndex = path.resolve("views", "home.html") 
const pathProductController = path.resolve("js", "product-controller.js") 
const pathRegisterFormController = path.resolve("js", "register-form-controller.js") 
const pathProductInfo = path.resolve("Info-Productos", "productos-Prueba.js") 
const pathRegister = path.resolve("views", "register.html")
const pathLogin = path.resolve("views", "login.html")



//----Peticiones CRUD----

app.get("/", (req,res) => res.sendFile(pathIndex))
app.get("/register", (req,res) => res.sendFile(pathRegister))
app.get("/login", (req,res) => res.sendFile(pathLogin))
app.get("/js/product-controller", (req,res) => res.sendFile(pathProductController))
app.get("/js/product-info", (req,res) => res.sendFile(pathProductInfo))
app.get("/js/register-form-controller", (req,res) => res.sendFile(pathRegisterFormController))

app.post("/register-form", (req,res) => {
    try {
        const data = req.body
        
    } catch (error) {
        
    }
})
app.post("/login-form", (req,res) => {
    try {
        const data = req.body
        
    } catch (error) {
        
    }
})



app.listen(PORT, () =>{
    console.log(`Se conecto Correctamnete a 
    http://localhost:${PORT}`);
})