import React, { useContext } from "react";

import { Fragment } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoContext } from "../Context/todo";
import { Modal } from "../components/Modal";
import { MyForm } from "../components/MyForm";

function AppUI() {
  const {
    pError,
    pLoading,
    aSearchedTodos,
    mCompleteTodo,
    mDeleteTodo,
    cmp_modal,
    setCmp_modal,
  } = useContext(TodoContext);

  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {pError && <p>Error!</p>}
        {pLoading && <p>Loading...</p>}
        {!pLoading && !aSearchedTodos.length && <p>Create Your First TODO!</p>}
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

      {!!cmp_modal && (
        <Modal>
          <MyForm />
          {/* <p>{JSON.stringify(aSearchedTodos[0]?.text)}</p> */}
        </Modal>
      )}

      <CreateTodoButton pSetOpenModal = {setCmp_modal} />
    </Fragment>
  );
}

export { AppUI };
