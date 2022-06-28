import React from "react";

import { Fragment } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

function AppUI({
  vTotalTodosLength,
  vCompletedTodosLength,
  inn_search,
  setInn_search,
  aSearchedTodos,
  mCompleteTodo,
  mDeleteTodo,
}) {
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

export { AppUI };
