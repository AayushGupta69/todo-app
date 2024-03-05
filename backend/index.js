const express = require("express");
const {createTodo, updateTodo} = require("./types");
const app = express();

app.use(express.json());

app.post("/createTodos", (req, res) => {
    const payload = req.body;
    const inputs = createTodo.safeParse(payload);
    if(!inputs.success){
        res.status(411).json({message: "Wrong Inputs!"});
    }
})

app.get("/todos", (req, res) => {

})

app.put("/updateTodo", (req, res) => {
    const payload = req.body;
    const inputs = updateTodo.safeParse(payload);
    if(!inputs.success){
        res.status(411).json({message: "Wrong Inputs!"});
    }
})