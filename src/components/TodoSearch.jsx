import { useContext, useState } from "react";
import { TodoContext } from "../Context/todo";
import "./styles/TodoSearch.scss";

function TodoSearch() {

  const {inn_search, setInn_search} = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setInn_search(e.target.value);
    console.log(inn_search);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={inn_search}
    />
  );
}

export { TodoSearch };

/* 
class Componente extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Juan" })}/>
        <h1>{this.state.lastName}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>
        <h1>{this.state.confirmPassword}</h1>
        <h1>{this.state.error}</h1>
      </div>
    );
  }
}
 */