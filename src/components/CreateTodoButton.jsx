import React from 'react';
import './styles/CreateTodoButton.scss';

function CreateTodoButton(props) {

  const onClickButton = (msg) => {
    alert('Create Todo Button Clicked'+msg);
  }

  return (
    <button className="CreateTodoButton"
      onClick={() => onClickButton("asdf")}
    >+</button>
  );
}

export { CreateTodoButton };