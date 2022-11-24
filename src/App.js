
import './App.css';
import {Component} from "react";
import Car from "./Car";

class App extends Component {
  render() {


  return (
    <div className="App">
      <h1>Exercice 3</h1>
      <Car couleur = "rouge" marque = "Toyota" km = "100km"/>
    </div>
  );
  }
}

export default App;
