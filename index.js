const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")
const connectDB = require("./src/models/index")
const items = require("./src/routes/items")
require("dotenv").config()

const app = express()
const uri = process.env.MONGO_URI
const port = process.env.PORT

// middleware
app.use(express.static("./src/public"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

// server and database config
const start = async () =>{
    try {
        await connectDB(uri).then(console.log("DB CONNECTED!"))
        app.listen(port, () => console.log(`Server is running on port: ${port}`))
    } catch(error) {
        console.log(error)
    }
}
start()


app.use("/api/v1/items",items)