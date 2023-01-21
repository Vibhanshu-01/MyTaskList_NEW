 const mongoose = require("mongoose")


const mytaskSchema = new mongoose.Schema({
    name: {type:String , required : true },
    author : String , 
    uid : String , 
    isComplete : Boolean , 
    date : {type : Date }
})

const MyTask = mongoose.model("Mytask", mytaskSchema)

exports.MyTask = MyTask