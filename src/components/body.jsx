import React, { Component } from "react";
import SideBar from "./sideBar";
import Main from "./main";
import "./body.css";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="bodyContainer">
        <div className="sideBarContainer">
          <SideBar className="sideBar" />
        </div>
        <div className="mainContainer">
          <Main className="main" />
        </div>
      </div>
    );
  }
}

export default Body;
