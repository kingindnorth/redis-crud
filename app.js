const express = require("express")
const redis = require("redis")
const handlebrs = require("express-handlebars")

require("dotenv").config()

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.set("engine",handlebrs({defaultLayout:"main"}))
app.set("view engine","handlebars")

//routes
app.use("/user/search",searchUser)
app.use("/user/add",addUser)
app.use("/user/dashboard",showUser)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})