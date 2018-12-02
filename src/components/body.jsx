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
          <div className="sideBarShadow">
            <div className="sideBarContainer">
              <div className="sideBarContent">
                <SideBar className="sideBar" />
              </div>
            </div>
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
