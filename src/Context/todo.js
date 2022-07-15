import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    aItem: aCustom_todos,
    mReloadItem: setCustom_Atodos,
    loading: pLoading,
    error: pError,
  } = useLocalStorage("TODOS_V1", []);

  const [inn_search, setInn_search] = useState("");
  const [cmp_modal, setCmp_modal] = useState(false);

  const vCompletedTodosLength = aCustom_todos.filter(
    (todo) => !!todo.completed
  ).length;
  
  const vTotalTodosLength = aCustom_todos.length;

  let aSearchedTodos = [];

  if (inn_search.length > 0) {
    aSearchedTodos = aCustom_todos.filter((pI) => {
      const vTodoText = pI.text.toLowerCase();
      const vSearchText = inn_search.toLowerCase();
      return vTodoText.includes(vSearchText);
    });
  } else {
    aSearchedTodos = aCustom_todos;
  }

  const mCompleteTodo = (pText) => {
    const vTodoIndex = aCustom_todos.findIndex((pI) => pI.text === pText);
    aCustom_todos[vTodoIndex].completed = true;
    const aNewTodos = [...aCustom_todos];
    aNewTodos[vTodoIndex].completed = true;
    setCustom_Atodos(aNewTodos);
  };

  const mDeleteTodo = (pText) => {
    const vTodoIndex = aCustom_todos.findIndex((pI) => pI.text === pText);
    aCustom_todos[vTodoIndex].completed = true;
    const aNewTodos = [...aCustom_todos];
    aNewTodos.splice(vTodoIndex, 1);
    setCustom_Atodos(aNewTodos);
  };

  const mAddTodo = (pText) => {
    //{ text: "Cortar cebolla", completed: true },
    const aNewTodos = [...aCustom_todos];
    aNewTodos.push({
      completed: false,
      text: pText,
    });
    setCustom_Atodos(aNewTodos);
  };


  return (
    <TodoContext.Provider
      value={{
        pLoading,
        pError,
        vTotalTodosLength,
        vCompletedTodosLength,
        aSearchedTodos,
        
        inn_search,
        setInn_search,
        cmp_modal, 
        setCmp_modal,

        mCompleteTodo,
        mDeleteTodo,
        mAddTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

/* <Consumer></Consumer>; */

export { TodoContext, TodoProvider };

/* 
pError={error}
pLoading={loading}
vTotalTodosLength={vTotalTodosLength}
vCompletedTodosLength={vCompletedTodosLength}
inn_search={inn_search}
setInn_search={setInn_search}
aSearchedTodos={aSearchedTodos}
mCompleteTodo={mCompleteTodo}
mDeleteTodo={mDeleteTodo}
*/

// const aDefaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Llorar con la llorono", completed: false },
//   { text: "Comer cebolla", completed: true },
//   { text: "Curso Platzi con React", completed: false },
// ];
