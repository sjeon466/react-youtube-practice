import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Body from "./components/body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="body">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
