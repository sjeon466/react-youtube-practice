import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Body from "./components/body";

class App extends Component {
  state = {
    sideDrawerOpen: true
  };

  handleMenuButtonClick = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="navBar">
          <NavBar onMenuButtonClick={this.handleMenuButtonClick} />
        </div>
        <div className="body">
          <Body isSideDrawerOpen={this.state.sideDrawerOpen} />
        </div>
      </div>
    );
  }
}

export default App;
