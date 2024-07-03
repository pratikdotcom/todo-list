const express = require("express");
const app = express();
app.use(express.json());
const {createTodo, updateTodo} = require("./types");
const {createTodoDB, updateTodoDB} = require("./database");

app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
});

app.get("/todos", function(req, res){

});

app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedUpdatePayload = updateTodo.safeParse(updatePayload);
    if(!parsedUpdatePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }


});


app.listen(3000, function(){
    console.log("Server is running on the port 3000!")
})