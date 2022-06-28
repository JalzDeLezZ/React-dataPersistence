import "./styles/TodoItem.scss";

function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.pMonComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete" 
        onClick={props.pMonDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
