import "./App.css";
import { AppUI } from "./AppUI";
import { useState } from "react";

const aDefaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Llorar con la llorono", completed: false },
  { text: "Comer cebolla", completed: true },
  { text: "Curso Platzi con React", completed: false },
];

function useLocalStorage(pKey, pInitialValue){
  let lstor_parsedItems;


  const aLStorage_Item = localStorage.getItem(pKey);


  if (!aLStorage_Item) {
    localStorage.setItem(pKey, JSON.stringify(pInitialValue));
    lstor_parsedItems = pInitialValue;
  } else {
    lstor_parsedItems = JSON.parse(aLStorage_Item);
  }
  
  const [aItem, setAItem] = useState(lstor_parsedItems);

  
  const mReloadItem = (pA_newItem) => {
    const aStringifiedItem = JSON.stringify(pA_newItem);
    localStorage.setItem(pKey, aStringifiedItem);
    setAItem(pA_newItem);
  };

  return [aItem, mReloadItem];
}

function App() {
  
  const [aCustom_todos, setCustom_Atodos] = useLocalStorage('TODOS_V1',[]);
  // const [aCustom_cats, setCustom_Acats] = useLocalStorage('cats',['cat1','cat2','cat3']);


  const [inn_search, setInn_search] = useState("");

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
