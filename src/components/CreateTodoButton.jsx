import React from 'react';
import './styles/CreateTodoButton.scss';

function CreateTodoButton(props) {

  const onClickButton = () => {
    props.pSetOpenModal((prevState) => !prevState); 
  }

  return (
    <button className="CreateTodoButton"
      onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };