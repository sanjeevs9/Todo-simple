
/*
    Todo{
        title: string,
        description: string,
        completed: boolean
    }
*/

const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://sanjeev:VH2cYQkXF178eBsE@cluster0.v8nr0x6.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo=mongoose.model('todos',todoSchema);

module.exports ={
    todo
}

