const express = require("express");
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/createTodos", async (req, res) => {
    const payload = req.body;
    const inputs = createTodo.safeParse(payload);
    if(!inputs.success){
        res.status(411).json({message: "Wrong Inputs!"});
    }

    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    });

    res.status(200).json({message: "Todo Created!"});
})

app.get("/todos", async (req, res) => {
    const allTodos = await todo.find({});
    res.status(200).json({allTodos});
})

app.put("/updateTodo", async (req, res) => {
    const payload = req.body;
    const inputs = updateTodo.safeParse(payload);
    if(!inputs.success){
        res.status(411).json({message: "Wrong Inputs!"});
    }

    await todo.updateOne({
        _id: payload.id
    }, {
        completed: true
    })

    res.status(200).json({message: "Marked todo as completed!"});
})

app.listen(3000);