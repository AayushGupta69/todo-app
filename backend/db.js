const mongoose = require("mongoose");
const {boolean} = require("zod");

mongoose.connect("mongodb+srv://aayushgupta69:2EeZZp7lGCA5H4bl@cluster0.5ipwyyg.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}