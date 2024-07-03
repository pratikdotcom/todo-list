const express = require("express");
const app = express();
app.use(express.json());
const {createTodo, updateTodo} = require("./types");

app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo
});

app.get("/todos", function(req, res){

});

app.put("/completed", function(req, res){

});


app.listen(3000, function(){
    console.log("Server is running on the port 3000!")
})