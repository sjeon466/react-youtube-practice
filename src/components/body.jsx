import React, { Component } from "react";
import SideBar from "./sideBar";
import Main from "./main";
import "./body.css";

class Body extends Component {
  state = {};
  render() {
    let shadowBarClasses = "sideBarShadow";
    if (!this.props.isSideDrawerOpen) {
      shadowBarClasses = "sideBarShadow close";
    }

    return (
      <div className="outerBodyContainer">
        <div className="bodyContainer">
          <div className={shadowBarClasses} />
          <SideBar className="sideBar" />
          <div className="mainContainer">
            <Main className="main" />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
