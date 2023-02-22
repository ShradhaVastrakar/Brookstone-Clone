const express = require("express");
const app = express()
app.use(express.json())
require("dotenv").config()
const cors = require("cors")
app.use(cors())

const {connection} = require("./db")
const {userRouter} = require("./routes/users.routes")

app.get("/", (req,res)=>{
    res.send("HOME PAGE")
})

app.use("/users", userRouter)

app.listen(process.env.port, async ()=>{
    try{
        await connection
        console.log("Connected to DB")
    } catch(err){
        console.log(err.message)
    }
    console.log(`Server is listening at port ${process.env.port}`)
})

