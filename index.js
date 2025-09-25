const express = require("express")
const connectToDb = require("./config/db")
const taskRouter = require("./routes/task.routes")

const app = express()


app.use(express.json())

connectToDb()

app.use("/task",taskRouter)

app.use("/test",(req,res)=>{
    res.send("This is a test route")
})

app.use((req,res)=>{
    res.status(404).json({msg:"404 page not found"})
})

app.listen(3000,()=>{
    console.log("This server is running on http://localhost:3000")
})