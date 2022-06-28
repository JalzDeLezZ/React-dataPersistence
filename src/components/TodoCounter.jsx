import React, { useContext } from "react";
import { TodoContext } from "../Context/todo";
import './styles/TodoCounter.scss';
function TodoCounter() {
  const {vTotalTodosLength, vCompletedTodosLength} = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">Has completado {vCompletedTodosLength} de {vTotalTodosLength} TODOs</h2>
  );
}


export {TodoCounter};