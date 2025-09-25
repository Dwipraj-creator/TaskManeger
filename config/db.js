const mongoose = require("mongoose")

const connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/TASK")
        console.log("connect to db")

    } catch (error) {
        console.log("Db not connected ")
    }
}

module.exports = connectToDb
