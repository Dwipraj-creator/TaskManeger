const express = require("express")
const { addTask, getTask, updateTask, deleteTaskById, getCompletedTask, getPendingTask } = require("../controllers/task.controller")


const taskRouter = express.Router()


taskRouter.post("/add-task",addTask)
taskRouter.get("/get-task",getTask)
taskRouter.put("/update-task/:id",updateTask)
taskRouter.delete("/delete-task/:id",deleteTaskById)
taskRouter.get("/get-completed",getCompletedTask)
taskRouter.get("/get-pending",getPendingTask)





module.exports = taskRouter