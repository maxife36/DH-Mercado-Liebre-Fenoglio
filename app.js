const express = require("express")
const path = require("path")
const { log } = require("util")

const app = express()

let pathPublic = path.resolve("public")

console.log(pathPublic);

app.use(express.static(pathPublic))

const PORT = 3000

//---Routs---

let pathIndex = path.resolve("views", "home.html") 
let pathProductController = path.resolve("js", "product-controller.js") 
let pathProductInfo = path.resolve("Info-Productos", "productos-Prueba.js") 


//----Peticiones CRUD----

app.get("/", (req,res) => res.sendFile(pathIndex))
app.get("/js/product-controller", (req,res) => res.sendFile(pathProductController))
app.get("/js/product-info", (req,res) => res.sendFile(pathProductInfo))


app.listen(PORT, () =>{
    console.log(`Se conecto Correctamnete a 
    http://localhost:${PORT}`);
})