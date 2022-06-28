import "./App.css";
import { AppUI } from "./AppUI";
import { useState } from "react";

const aDefaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Llorar con la llorono", completed: false },
  { text: "Comer cebolla", completed: true },
  { text: "Curso Platzi con React", completed: false },
];

function App() {
  const aLocalStorageTodos = localStorage.getItem("TODOS_V1");

  let lstor_parsedTodos;

  if (!aLocalStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    lstor_parsedTodos = [];
  } else {
    lstor_parsedTodos = JSON.parse(aLocalStorageTodos);
  }

  // const [aTodos, setAtodos] = useState(aDefaultTodos);
  const [aTodos, setAtodos] = useState(lstor_parsedTodos);
  const [inn_search, setInn_search] = useState("");

  const vCompletedTodosLength = aTodos.filter(
    (todo) => !!todo.completed
  ).length;
  const vTotalTodosLength = aTodos.length;

  let aSearchedTodos = [];

  if (inn_search.length > 0) {
    aSearchedTodos = aTodos.filter((todo) => {
      const vTodoText = todo.text.toLowerCase();
      const vSearchText = inn_search.toLowerCase();
      return vTodoText.includes(vSearchText);
    });
  } else {
    aSearchedTodos = aTodos;
  }

  const mSaveTodos = (pA_newTodos) => {
    const aStringifiedTodos = JSON.stringify(pA_newTodos);
    localStorage.setItem("TODOS_V1", aStringifiedTodos);
    setAtodos(pA_newTodos);
  };

  const mCompleteTodo = (pText) => {
    const vTodoIndex = aTodos.findIndex((pI) => pI.text === pText);
    aTodos[vTodoIndex].completed = true;
    // aTodos[vTodoIndex].completed = {//   text: aTodos[vTodoIndex].text,//   completed: true,// }
    const aNewTodos = [...aTodos];
    aNewTodos[vTodoIndex].completed = true;
    // setAtodos(aNewTodos);
    mSaveTodos(aNewTodos);
  };

  const mDeleteTodo = (pText) => {
    const vTodoIndex = aTodos.findIndex((pI) => pI.text === pText);
    aTodos[vTodoIndex].completed = true;
    const aNewTodos = [...aTodos];
    aNewTodos.splice(vTodoIndex, 1);
    mSaveTodos(aNewTodos);
  };

  return (
    <AppUI
      vTotalTodosLength={vTotalTodosLength}
      vCompletedTodosLength={vCompletedTodosLength}
      inn_search={inn_search}
      setInn_search={setInn_search}
      aSearchedTodos={aSearchedTodos}
      mCompleteTodo={mCompleteTodo}
      mDeleteTodo={mDeleteTodo}
    />
  );
}

export default App;
