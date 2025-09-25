const Task = require("../models/task.model");


exports.addTask = async(req,res)=>{
    try {
        const {title,description,status}=req.body;

        if(!title || !description) return res.status(401).json({msg:'title and description filds are needed'})

        const task = await Task.create({title,description,status})

        res.status(200).json({msg:'Task has been created', task:task})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"something went wrong"})
    }
}


exports.getTask = async(req,res)=>{
    try {
        const task = await Task.find()
        if(!task) return res.status(404).json({msg:'Not task has been found'})

        res.status(200).json({msg:"All the task has been fatched", tasks:task})
    } catch (error) {
         console.log(error);
        res.status(500).json({msg:"something went wrong"})
    }
}



exports.updateTask = async(req,res)=>{
    try {
         const {id}=req.params

        const updatedTask = await Task.findByIdAndUpdate(id,req.body,{new:true})

        if(!updatedTask) return res.status(404).json({msg:'There is no task on this id'})

        res.status(201).json({msg:"Task has been update",updatedTask:updatedTask})
    } catch (error) {
            console.log(error);
        res.status(500).json({msg:"something went wrong"})
    }
}


exports.deleteTaskById = async(req,res)=>{
    try {
        const {id}=req.params;

        const task = await Task.findByIdAndDelete(id);
        if(!task) return res.status(404).json({msg:"There is no task on this id"})

        res.status(200).json({msg:'This task has been deleted'})
    } catch (error) {
         console.log(error);
        res.status(500).json({msg:"something went wrong"})
    }
}

exports.getCompletedTask = async(req,res)=>{
    try {
        const task = await Task.find()

        if(!task) return res.status(404).json({msg:"No task found"})

        const filteredTask = task.filter((e)=>e.status !=="pending")

        if(!filteredTask) return res.status(404).json({msg:"There is no completed task"})

        res.status(200).json({msg:'get the the completed task ',Task : filteredTask})
    } catch (error) {
         console.log(error);
        res.status(500).json({msg:"something went wrong"})
    }
}


exports.getPendingTask = async(req,res)=>{
    try {
        const task = await Task.find()

        if(!task) return res.status(404).json({msg:"No task found"})

        const filteredTask = task.filter((e)=>e.status !=="completed")

        if(!filteredTask) return res.status(404).json({msg:"There is no pending task"})

        res.status(200).json({msg:'get the the completed task ',Task : filteredTask})
    } catch (error) {
         console.log(error);
        res.status(500).json({msg:"something went wrong"})
    }
}