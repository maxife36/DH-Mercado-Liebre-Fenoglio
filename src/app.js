/* ---Modulos Nativos--- */
require('dotenv').config(); //Configura las variables establecidas en .env (no olvidar el script "start" del package.json)
const express = require("express")
const path = require("path")

/* ---Modulos Internos--- */

const mainRoutes = require("./routes/mainRoutes")
const internalRoutes = require("./routes/internalRoutes")

/* ---Variables de Configuracion--- */

const PORT = parseInt(process.env.PORT) || 3000

const app = express()

const pathPublic = path.resolve("public")
const pathViews = path.resolve("src", "views")

/* ---Pre Configuraciones de Express--- */

app.set("view engine", "ejs")
app.set("views", pathViews)

app.use(express.static(pathPublic))

/* ---Rutas Principales de Express--- */

app.use("/", mainRoutes)
app.use("/js", internalRoutes)



app.listen(PORT, () =>{
    console.log(`Se conecto Correctamnete a 
    http://localhost:${PORT}`);
})