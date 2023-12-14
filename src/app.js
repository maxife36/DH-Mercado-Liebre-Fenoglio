const { render } = require("ejs")
const express = require("express")
const path = require("path")
const mainRoutes = require("./routes/mainRoutes")
const internalRoutes = require("./routes/internalRoutes")

const app = express()

const pathPublic = path.resolve("public")
const pathViews = path.resolve("src", "views")

app.set("view engine", "ejs")
app.set("views", pathViews)

app.use(express.static(pathPublic))

const PORT = process.env.PORT || 3000

app.use("/", mainRoutes)
app.use("/js", internalRoutes)


//----Peticiones CRUD----

/* app.get("/", (req,res) => res.render("home.ejs"))
app.get("/register", (req,res) => res.render("register.ejs"))
app.get("/login", (req,res) => res.render("login.ejs")) */






app.listen(PORT, () =>{
    console.log(`Se conecto Correctamnete a 
    http://localhost:${PORT}`);
})