import React, { Component } from "react";
import "./App.css";
//import RouterProps from "./ComponentsTest/RoutersProps";
//import ListItemTest from "./ComponentsTest/ListItemTest";
import TakeOrder from "./Components/Takeorder/TakeOrder";
//import ListItemLink from "./Components/Drawers/ListItemLink";

class App extends Component {
  render() {
    return (
      <div>
        <TakeOrder />
      </div>
    );
  }
}

export default App;
