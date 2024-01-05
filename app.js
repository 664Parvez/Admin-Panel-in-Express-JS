const express = require("express")

const app = express()

const loginRouter = require("./routes/login.route")
const indexRouter = require("./routes/index.route")

app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")


app.use(loginRouter)
app.use(indexRouter)


module.exports = app