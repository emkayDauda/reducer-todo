import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, markComplete}){
    return(
        <div>
            {
                todos.map(todo => <Todo todo={todo} markComplete={markComplete} ></Todo>)
            }
        </div>
    )
}