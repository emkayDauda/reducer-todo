import react from "react";
import Todo from "./Todo";

export default function TodoList({todos}){
    return(
        <div>
            {
                todos.map(todo => <Todo todo={todo} ></Todo>)
            }
        </div>
    )
}