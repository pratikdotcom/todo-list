const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pratik2271:pratik%401624@pratikproject.vglse6e.mongodb.net/todo-list")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}