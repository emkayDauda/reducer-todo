import React from "react";

export default function Todo({todo, markComplete}) {
    return(
        <h3 onClick= {() => markComplete(todo.id)}>{todo.item}</h3>
    )
}