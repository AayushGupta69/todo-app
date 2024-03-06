export function Todos({todos}){
    return (
        <div>
            {todos.map(function(todo) {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div key = {todo.id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button style={{
                            padding: 10,
                            margin: 10
                        }}>{todo.completed === true ? "Completed" : "Mark as Completed"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}