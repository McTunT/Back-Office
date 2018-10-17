import React, { Component } from "react";
import "./App.css";
import FormRetail from "./Components/FormRetail";
import Calculaor from "./Comtest/Calculator";
import Routers from "./Comtest/Routers";
class App extends Component {
  render() {
    return (
      <div>
        <FormRetail />
        <Routers />
        <Calculaor />
      </div>
    );
  }
}

export default App;
