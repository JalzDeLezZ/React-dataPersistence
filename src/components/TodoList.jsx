import react from "react";
import './styles/TodoList.scss'

function TodoList(props) {
    return (
      <section>
        <ul>
          {props.children}
        </ul>
      </section>
    );
  }
  
  
export { TodoList};