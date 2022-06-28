import "./App.css";
import { Fragment, useState } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

// const aDefaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Llorar con la llorono", completed: false },
//   { text: "Comer cebolla", completed: true },
//   { text: "Curso Platzi con React", completed: false },
// ];
function App() {

  const aLocalStorageTodos = localStorage.getItem('TODOS_V1');

  let lstor_parsedTodos;

  if (!aLocalStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    lstor_parsedTodos = [];
  } else{
    lstor_parsedTodos = JSON.parse(aLocalStorageTodos);
  }

  // const [aTodos, setAtodos] = useState(aDefaultTodos);
  const [aTodos, setAtodos] = useState(lstor_parsedTodos);
  const [inn_search, setInn_search] = useState("");

  const vCompletedTodosLength = aTodos.filter((todo) => !!todo.completed).length;
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

  const mCompleteTodo = (pText) => {
    const vTodoIndex = aTodos.findIndex( pI => pI.text === pText);
    aTodos[vTodoIndex].completed = true;
    // aTodos[vTodoIndex].completed = {
    //   text: aTodos[vTodoIndex].text,
    //   completed: true,
    // }
    const aNewTodos = [...aTodos];
    aNewTodos[vTodoIndex].completed = true;
    setAtodos(aNewTodos);
  }

  const mDeleteTodo = (pText) => {
    const vTodoIndex = aTodos.findIndex( pI => pI.text === pText);
    aTodos[vTodoIndex].completed = true;
    const aNewTodos = [...aTodos];
    aNewTodos.splice(vTodoIndex, 1);
    setAtodos(aNewTodos);
  }

  return (
    <Fragment>
      <TodoCounter 
        total={vTotalTodosLength}
        completed={vCompletedTodosLength}
      />
      <TodoSearch stateOne={inn_search} setStateOne={setInn_search} />
      <TodoList>
        {aSearchedTodos.map((pII, i) => (
          <TodoItem 
            key={i} 
            text={pII.text} 
            completed={pII.completed} 
            pMonComplete={() => mCompleteTodo(pII.text)}
            pMonDelete={() => mDeleteTodo(pII.text)}
            />
        ))}
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
