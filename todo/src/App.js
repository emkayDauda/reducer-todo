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
  return (
    <div className="App">
      <TodoList todos = {data} />
      <TodoForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
