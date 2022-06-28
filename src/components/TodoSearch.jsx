import { useState } from "react";
import "./styles/TodoSearch.scss";

function TodoSearch({stateOne, setStateOne}) {

  const onSearchValueChange = (e) => {
    setStateOne(e.target.value);
    console.log(stateOne);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={stateOne}
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