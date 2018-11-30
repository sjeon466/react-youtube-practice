import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Body from "./components/body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="navBar" />
        <Body className="body" />
      </div>
    );
  }
}

export default App;
