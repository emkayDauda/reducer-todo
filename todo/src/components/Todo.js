import React from "react";

export default function Todo({todo, markComplete}) {
    return(
        todo.completed ? <h3 style={{"textDecoration": "line-through"}} onClick= {() => markComplete(todo.id)}>{todo.item}</h3> : <h3 onClick= {() => markComplete(todo.id)}>{todo.item}</h3>
    )
}