import React, { useContext } from "react";

import { Fragment } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoContext } from "../Context/todo";

function AppUI() {
  const { pError, pLoading, aSearchedTodos, mCompleteTodo, mDeleteTodo } =
    useContext(TodoContext);

  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {pError && <p>Error!</p>}
          {pLoading && <p>Loading...</p>}
          {!pLoading && !aSearchedTodos.length && (
            <p>Create Your First TODO!</p>
          )}
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

export { AppUI };
