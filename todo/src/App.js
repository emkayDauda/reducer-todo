import React from 'react';
import TodoList from "./components/TodoList";
import './App.css';
import { initialList, reducer, ON_MARK_COMPLETE, ON_ADD_TODO } from "./reducer/reducer";
import { useReducer } from "react";



function App() {
  const [data, dispatch] = useReducer(reducer, initialList);
  console.log(data);
  return (
    <div className="App">
      <TodoList todos = {data} />
    </div>
  );
}

export default App;
