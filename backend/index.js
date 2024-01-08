const express= require("express");
const app=express();
const {createTodo, updateTodo}=require("../backend/type");
const { todo } = require("./db");
const cors=require("cors")

app.use(express.json());
app.use(cors());

//title-string
//description-string

app.post("/todo",  async function(req,res){
    const payload=req.body;
    const response=createTodo.safeParse(payload);
    if(!response.success){
        req.status(411).json({
            msg:"you send wrong inputs",
        })
        return;
    }
    //put in mongo
   await todo.create({
        title: payload.title,
        description : payload.description,
        completed: false

    })
    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async function(req,res){
    const todos=await todo.find();
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    //check id
const payload = req.body;
const response=updateTodo.safeParse(payload);
if(!response.success){  
    req.status(411).json({
        msg:"you send wrong",
    })
    return;
}
//complete the specific todo
await todo.updateOne({
_id:req.body.id
},{
    $set: { completed: true }
})

res.json({
    msg:"todo marked completed"
})
})

app.listen(3000);

//basic middlewares