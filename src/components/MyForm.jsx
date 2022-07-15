import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/todo';
import './styles/MyForm.scss';

const MyForm = () => {
  const [inn_todo, setInn_todo] = useState('');
  const {
    mAddTodo,
    setCmp_modal
  } = useContext(TodoContext);

  const mCancel = () =>{
    setCmp_modal(false);
  }
 

  const mSubmit = (e) => {
    e.preventDefault();
    mAddTodo(inn_todo);
    setCmp_modal(false);
  }

  return (
    <form onSubmit={mSubmit}>
      <label htmlFor="one">Escribe tu Nuevo TODO LIST</label>
      <textarea 
      id='one'
      value={inn_todo}
      onChange={(e) => setInn_todo(e.target.value)}
      placeholder='Cortal la cebolla para el almuerzo'
      />
      <div className='TodoForm-buttonContainer'>
        <button type='button' onClick={mCancel} className='TodoForm-button TodoForm-button--cancel'>Cancel</button>
        <button type='submit' className='TodoForm-button TodoForm-button--add' >Add</button>
      </div>
    </form>
  )
}

export {MyForm}

/* 
t.a
      name="" 
      id="" 
      cols="30" 
      rows="10"
*/