import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';
import { initialList, reducer, ON_MARK_COMPLETE, ON_ADD_TODO } from "./reducer/reducer";
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
  return (
    <div className="App">
      <TodoList todos = {data} markComplete= {markComplete} />
      <TodoForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
