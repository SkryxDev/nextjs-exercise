const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const config = require("./config.json")

//App Create
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routers
var userRoute = require("./routes/user.router")
app.use('/users', userRoute)

//Mongoose Connection
mongoose.set("strictQuery", true) //No warning in console
mongoose.connect(config.mongo)

//Listen API
app.listen(config.port, () => console.log("Online on " + config.port))