import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';
import { initialList, reducer, ON_MARK_COMPLETE, ON_ADD_TODO, ON_CLEAR_COMPLETED } from "./reducer/reducer";
import { useReducer } from "react";



function App() {
  const [data, dispatch] = useReducer(reducer, initialList);
  console.log(data);

  const onSubmit = (formValues, actions) => {
    dispatch({
      type: ON_ADD_TODO,
      payload: {value: formValues.item}
    })
    actions.resetForm();
  }

  const markComplete = id => dispatch({
    type: ON_MARK_COMPLETE,
    payload: {id: id}
  })

  const clearCompleted = () => dispatch({
    type: ON_CLEAR_COMPLETED
  })
  return (
    <div className="App">
      <TodoList todos = {data} markComplete= {markComplete} />
      <TodoForm onSubmit={onSubmit} />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default App;
