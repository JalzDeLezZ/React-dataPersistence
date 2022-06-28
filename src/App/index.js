import "./App.css";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../Context/todo";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

// const aDefaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Llorar con la llorono", completed: false },
//   { text: "Comer cebolla", completed: true },
//   { text: "Curso Platzi con React", completed: false },
// ];
