import React, { Component } from "react";
import SideBar from "./sideBar";
import Main from "./main";
import "./body.css";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="outerBodyContainer">
        <div className="bodyContainer">
          <div className="sideBarContainer">
            <SideBar className="sideBar" />
          </div>
          <div className="mainContainer">
            <Main className="main" />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
