const express = require("express");
const app = express();
app.use(express.json());
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./database");

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
});

app.get("/todos", async function(req, res){
   const todos = await todo.find(); // needs to await for todos to come 
   console.log(todos) // if it isn't await it will give back a promise
   res.json({
    todos
   })
});

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedUpdatePayload = updateTodo.safeParse(updatePayload);
    if(!parsedUpdatePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
  await todo.update({
    _id: req.body.id
  },{
    completed: true
  })
  res.json({
    msg: "Todo marked as completed!"
  })
});

app.listen(3000, function(){
    console.log("Server is running on the port 3000!")
})